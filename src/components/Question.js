import React, { Component } from "react";
import request from "superagent";
import AnswerBox from "./AnswerBox";
import { connect } from "react-redux";
import store from "../store";
import Score from "./Score"


class Question extends Component {
  state = {
    images: [],
  };
  fetchData = () => {
    request
      .get("https://dog.ceo/api/breeds/image/random/3")
      .then(response => {
        this.setState({ images: response.body.message });
        this.actionsDispatcher()
      })
      .catch(console.error);
  };

  actionsDispatcher = () => {
    const urlRandomImage = this.getRandomImage();
    const breeds = this.getBreedsFromUrl();
    const myStore = store.getState();
    let myCounterReducer = myStore.counterReducer.counterQuestion || 0

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
      payload:  myCounterReducer
    });
  }

  // checkDoubleBreeds = () => {
  //   const images = this.state.images;
  //   console.log(images)
  //   const splittedArray = images.map(url => url.split("/"));
  //   let flag = false
  //   const selectBreedFromArray = splittedArray.map(str => str[4]);
  //   console.log(selectBreedFromArray)

  //   console.log(selectBreedFromArray[0])
  //   console.log(selectBreedFromArray[1])
  //   console.log(selectBreedFromArray[2])
  //   if(selectBreedFromArray[0] === selectBreedFromArray[1] ||
  //     selectBreedFromArray[0] === selectBreedFromArray[2] ||
  //     selectBreedFromArray[1] === selectBreedFromArray[2]) {flag = true}
  //     console.log(flag)
  //     if(flag===true) this.fetchData();
  //     else console.log('evviva')

  // }

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
    const urlRandomImage = this.getRandomImage();
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