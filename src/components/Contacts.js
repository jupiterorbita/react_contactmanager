import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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
    ]
  };

  deleteContact = id => {
    console.log("Contacts.js > deleteContact(id) =>", id);
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    // console.log("Contacts.js -> this.state => ", this.state);
    // we are just pulling contacts out of this.state (destructuring)
    const { contacts } = this.state;

    // .map loops thru contact and returns name, email, phone
    // we need to assign key to the id for it to be unique
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
