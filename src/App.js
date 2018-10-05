import React, { Component } from "react";
import "./App.css";
import Question from "./components/Question";

export default class App extends Component {
  render() {
    return(
      <div className="App">
        <h1 className="Title">Dog Breed Game</h1>
        <Question />
      </div>
    )
  }
}

