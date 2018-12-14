import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    // destructure and get the id from the url
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    //we're going to get back an obj, put res data in a var
    const editedContact = res.data;

    this.setState({
      name: editedContact.name,
      email: editedContact.email,
      phone: editedContact.phone
    });
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // Validation Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const updateContact = {
      name,
      email,
      phone
    };

    // THE ID COMES FROM THE RES

    const { id } = this.props.match.params;

    // update/put request, SECOND PARAM SEND THE DATA!!!!
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateContact
    );

    //payload comes from the res
    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    //clear the field after addContact Clear state, clear errors obj
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    // now redirect
    this.props.history.push("/");
  };

  onChange = e => {
    // e.target.name will access whatever name is in the form,
    // name = "name", name="email"...
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    //destructuring state for we can use it the form instead of using this.state.email...
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone#"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    value="Edit Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
