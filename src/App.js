import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="John Williams"
          email="js@email.com"
          phone="555-123-1234"
        />
        <Contact
          name="Sarah Smith"
          email="karen@email.com"
          phone="888-123-1234"
        />
      </div>
    );
  }
}

export default App;
