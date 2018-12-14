// lifecycle methods are only available in classes

import React, { Component } from "react";

class Test extends Component {
  state = {
    //create empty such as to recieved data form the api
    title: "",
    body: ""
  };

  componentDidMount() {
    // AJAX/API calls here
    console.log("componentDidMount...");
    // example post using jsonplaceholder.typicode.com
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(json_data => {
        console.log(json_data);
        //once we recive the data set it to state
        this.setState({
          title: json_data.title,
          body: json_data.body
        });
      });
  }

  // componentWillMount() {
  //   // DEPRECATED
  //   // triggers before mounting
  //   console.log("componentWillMount...");
  // }

  // componentDidUpdate() {
  //   // only triggers when change in STATE
  //   console.log("componentDidUpdate...");
  // }

  // componentWillUpdate() {
  //   // DEPRECATED
  //   // only triggers before render for new props or state
  //   console.log("componentDidUpdate...");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   // DEPRECATED
  //   // when component receives new properties then this runs
  //   // used with Redux
  //   // when you have a state in redux (an application level state),
  //   // you can take it into a single component and map it as props
  //   // you can turn this piece of state into a component prop,
  //   // you get the newProps comming in and manilpulate them
  //   console.log("componentWillReceiveProps...");
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   // fires before mutations are make
  //   // before the DOM is updated
  //   console.log("getSnapshotBeforeUpdate...");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   // still get warning bc no state in this component
  //   // cannot setState here, only RETURN
  //   return null;
  // }

  render() {
    //instead of doing this.state.body we will destructure
    // to use here instead
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <p>testing lifecycle methods and http requests</p>
        <hr />
        <code>fetching from jsonplaceholder...</code>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
