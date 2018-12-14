import React, { Component } from "react";
import Contact from "./Contact";

import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          // console.log("Contacts.js -> this.state => ", this.state);
          // we are just pulling contacts out of this.state (destructuring)
          const { contacts } = value;

          // .map loops thru contact and returns name, email, phone
          // we need to assign key to the id for it to be unique
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">
                  {" "}
                  <i className="fas fa-users" /> Contact{" "}
                </span>
                List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
