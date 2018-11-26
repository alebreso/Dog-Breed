import React, { Component } from "react";
import request from "superagent";
import AnswerBox from "./AnswerBox";
import { connect } from "react-redux";
import store from "../store";
import Score from "./Score"


class Question2 extends Component {
  state = {
    images: [],
  };
  fetchData2 = () => {
    request
      .get("https://dog.ceo/api/breeds/image/random/3")
      .then(response => {
        this.setState({ images: response.body.message });
        this.actionsDispatcher()
      })
      .catch(console.error);
  };

  actionsDispatcher = () => {
    const urlRandomImage = this.state.images;
    const breeds = this.getBreedFromUrl();
    const myStore = store.getState();
    let myCounterQuestion = myStore.counterReducer.counterQuestion || 0

    store.dispatch({
      type: "LOAD_IMG",
      payload: urlRandomImage
    });
    store.dispatch({
      type: "LOAD_BREEDS",
      payload: breeds
    });
    store.dispatch({
      type: "COUNTER_QUESTIONS++",
      payload:  myCounterQuestion
    });
  }

  getBreedFromUrl = () => {
    const imageStateArray = this.state.images;
    const splittedArray = imageStateArray.map(url => url.split("/"));
    const selectBreedFromArray = splittedArray.map(str => str[4]);
    const randomIndex = Math.floor(Math.random()*3)
    return selectBreedFromArray[randomIndex];
  };

  componentDidMount(){
    this.fetchData2()
  }

  render() {
    const urlRandomImages = this.state.images;
    const breed = this.getBreedFromUrl();
    return (
      <div>
        <div className="question">
          <div className="question-breed">
            <h3>{breed}</h3>
          </div>
        </div>
        <AnswerBox
          breed={breed}
          urlImages={urlRandomImages}
          fetchData={this.fetchData2}
        />
        <Score />
      </div>
    );
  }
}


export default connect(null)(Question2);