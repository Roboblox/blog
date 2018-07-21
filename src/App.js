import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Template/Navbar";
import Header from "./Template/Header";
import Footer from "./Template/Footer";
import Container from "./Template/Container";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Container />

        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
