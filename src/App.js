import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Просто произвольный заголовок</h1>
        <h2>Второй просто произвольный заголовок</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4">Sometext</div>
            <div className="col-md-4">Sometext</div>
            <div className="col-md-4">Sometext</div>
            <div className="col-md-4">Sometext</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
