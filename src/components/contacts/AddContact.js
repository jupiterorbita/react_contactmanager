import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
//npm install uuid
import uuid from "uuid";

class AddContact extends Component {
  // each form field is a piece of the state
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onSubmit = (dispatch, e) => {
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

    // if the key and value are the same ex. name: name, then just write name (ES6)
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    console.log("submitting form this.state => ", this.state);

    dispatch({ type: "ADD_CONTACT", payload: newContact });

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
              <div className="card-header">Add Contact</div>
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
                    value="Add Contact"
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

export default AddContact;
