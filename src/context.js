import React, { Component } from "react";

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
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jd@email.com",
        phone: "333-223-1234"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@email.com",
        phone: "222-243-0034"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@email.com",
        phone: "111-111-1111"
      }
    ],
    // for a way to call the action in the reducer() we need dispatch
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
