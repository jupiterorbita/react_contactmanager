import React, { Component } from "react";
// import link to edit will go to another page
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
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

  onDeleteClick = async (id, dispatch) => {
    //wrap it around a try/catch/finally bc no backend
    try {
      console.log(`Delete Clicked... id = ${id}`);
      // make the fake delete request
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  // //before async/await refactor
  // onDeleteClick = (id, dispatch) => {
  //   console.log(`Delete Clicked... id = ${id}`);
  //   // make the fake delete request
  //   axios
  //     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => {
  //       console.log(
  //         "came back with del request... lets see whats i the data, should be empty {}, network tab should status 200"
  //       );
  //       console.log(res.data);
  //       dispatch({ type: "DELETE_CONTACT", payload: id });
  //     });
  // };

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
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "2rem"
                    }}
                  />
                </Link>
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
