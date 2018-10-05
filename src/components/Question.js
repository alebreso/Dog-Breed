import React, { Component } from "react";
import request from "superagent";
import AnswerBox from "./AnswerBox";
import { connect } from "react-redux";
import store from "../store";
import Score from "./Score"


class Question extends Component {
  state = {
    images: [],
    randomImage: null
  };
  fetchData = () => {
    request
      .get("https://dog.ceo/api/breeds/image/random/3")
      .then(response => {
        this.setState({ 
          images: response.body.message, 
        });
        this.actionsDispatcher()
      })
      .catch(console.error);
  };

  actionsDispatcher = () => {
    const breeds = this.getBreedsFromUrl();
    const myStore = store.getState();
    const myCounterQuestion = myStore.counterReducer.counterQuestion || 0

    store.dispatch({
      type: "LOAD_BREEDS",
      payload: breeds
    });
    store.dispatch({
      type: "COUNTER_QUESTIONS++",
      payload:  myCounterQuestion
    });
  }

  getBreedsFromUrl = () => {
    const imageStateArray = this.state.images;
    const splittedArray = imageStateArray.map(url => url.split("/"));
    const selectBreedFromArray = splittedArray.map(str => str[4]);
    return selectBreedFromArray;
  };

  getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    const randomImage = this.state.images[randomIndex];
    return randomImage;
  };

  componentDidMount(){
    this.fetchData()
  }

  render() {
    const urlRandomImage = this.getRandomImage()
    const breeds = this.getBreedsFromUrl();

    return (
      <div>
        <div className="question">
          <img alt="" src={urlRandomImage} />
        </div>
        <AnswerBox
          breeds={breeds}
          urlRandomImage={urlRandomImage}
          fetchData={this.fetchData}
        />
        <Score />
      </div>
    );
  }
}


export default connect(null)(Question); 