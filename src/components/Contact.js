import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRerequired,
  //   email: PropTypes.string.isRerequired,
  //   phone: PropTypes.string.isRerequired
  // };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRerequired,
  email: PropTypes.string.isRerequired,
  phone: PropTypes.string.isRerequired
};

export default Contact;
