import React, { Component } from "react";
import store from "../store";
import Question from "./Question";

export default class AnswerBox extends Component {
  handleClick = e => {
    console.log(e.target.id);
    console.log(this.props.urlRandomImage);
    const id = e.target.id;
    const image = this.props.urlRandomImage;
    const counterQuestion = store.getState();
    console.log(counterQuestion.counterQuestion);
    const c = counterQuestion.counterQuestion;
    if (image.includes(id)) {
      console.log("Right Answer");
      // store.dispatch({
      //   type: "RIGHT_ANSWER",
      //   payload: counterQuestion
      // });
      store.dispatch({
        type: "COUNTER_QUESTION++",
        payload: c
      });

      this.props.fetchData();
    } else {
      console.log("Wrong Answer");
      if (!image.includes(id)) {
      }
    }
  };

  render() {
    return (
      <div className="AnswerBox">
        {this.props.breeds.map(breed => (
          <span id={breed} key={breed} onClick={this.handleClick}>
            {breed}
          </span>
        ))}
      </div>

      // <span
      //   className="boxOne"
      //   id={this.props.breeds[0]}
      //   onClick={this.handleClick}
      // >
      //   {this.props.breeds[0]}
      // </span>
      // <span
      //   className="boxTwo"
      //   id={this.props.breeds[1]}
      //   onClick={this.handleClick}
      // >
      //   {this.props.breeds[1]}
      // </span>
      // <span
      //   className="boxThree"
      //   id={this.props.breeds[2]}
      //   onClick={this.handleClick}
      // >
      //   {this.props.breeds[2]}
      // </span>
    );
  }
}
