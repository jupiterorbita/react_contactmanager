import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
// import "../../contact.css";

class Contact extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };

  state = {
    showContactInfo: false
  };

  onDeleteClick = (id, dispatch) => {
    console.log("Delete Clicked");
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  // onShowClick = e => {
  //   console.log("clicked");
  //   // console.log(this.state);
  //   // console.log(e.target);
  //   this.setState({ showContactInfo: !this.state.showContactInfo });
  // };

  render() {
    const { id, name, email, phone } = this.props.contact;
    // console.log("this.props => ", this.props);
    // console.log("this.props.contact => ", this.props.contact);
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
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
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

// console.log("Contact.js -> Contact.propTypes => ", Contact.propTypes);

export default Contact;
