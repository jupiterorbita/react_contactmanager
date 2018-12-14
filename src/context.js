import React, { Component } from "react";
// import axios for http requests
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      // we will send the id as payload
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts] //this will add the new contact
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        // action.payload has the entire contact
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  // Provider is a component and has lifecycle method
  // after setting the state we do the fech request
  state = {
    contacts: [
      // {
      //   id: 1,
      //   name: "John Doe",
      //   email: "jd@email.com",
      //   phone: "333-223-1234"
      // },
      // {
      //   id: 2,
      //   name: "Karen Williams",
      //   email: "karen@email.com",
      //   phone: "222-243-0034"
      // },
      // {
      //   id: 3,
      //   name: "Henry Johnson",
      //   email: "henry@email.com",
      //   phone: "111-111-1111"
      // }
    ],
    // for a way to call the action in the reducer() we need dispatch
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  // inside this component which holds our state we do the fetch request
  // async/await - make it more synchronous instead of having a .get and a .then
  // asign a var to the res and put the res in that var...
  async componentDidMount() {
    // using npm i axios
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    this.setState({
      contacts: res.data
    });
  }

  // componentDidMount() {
  //   // using npm i axios
  //   axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
  //     console.log("response from server res...");
  //     console.log(res);
  //     // now set state to use received data
  //     this.setState({
  //       contacts: res.data
  //     });
  //   });
  // }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
