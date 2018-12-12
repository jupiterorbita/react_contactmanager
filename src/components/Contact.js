import React, { Component } from "react";
import PropTypes from "prop-types";
// import "./contact.css";

class Contact extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };

  state = {
    showContactInfo: false
  };

  onDeleteClick = () => {
    console.log("Delete Clicked");
    this.props.deleteClickHandler();
  };
  // onShowClick = e => {
  //   console.log("clicked");
  //   // console.log(this.state);
  //   // console.log(e.target);
  //   this.setState({ showContactInfo: !this.state.showContactInfo });
  // };

  render() {
    const { name, email, phone } = this.props.contact;
    // console.log("this.props => ", this.props);
    // console.log("this.props.contact => ", this.props.contact);
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

// console.log("Contact.js -> Contact.propTypes => ", Contact.propTypes);

export default Contact;
