import React, { Component } from "react";
import request from "superagent";
import AnswerBox from "./AnswerBox";
import { connect } from "react-redux";
import store from "../store";

class Question extends Component {
  state = {
    images: []
  };
  fetchData = () => {
    request
      .get("https://dog.ceo/api/breeds/image/random/3")
      .then(response => this.setState({ images: response.body.message }))
      .catch(console.error);
  };
  componentDidMount() {
    this.fetchData();
  }

  getBreedsFromUrl = () => {
    const imageStateArray = this.state.images;
    const splittedArray = imageStateArray.map(url => url.split("/"));
    const selectBreedFromArray = splittedArray.map(str => str[4]);
    // this.setState({ ...this.state, breeds: selectBreedFromArray });
    return selectBreedFromArray;
  };

  getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return this.state.images[randomIndex];
  };
  render() {
    const urlRandomImage = this.getRandomImage();
    const breeds1 = this.getBreedsFromUrl();
    const obj = store.getState();
    store.dispatch({
      type: "LOAD_IMG",
      payload: urlRandomImage
    });
    store.dispatch({
      type: "LOAD_BREEDS",
      payload: breeds1
    });

    console.log(this.state);
    return (
      <div>
        <div className="question">
          <img alt="" src={urlRandomImage} />
        </div>
        <AnswerBox
          breeds={breeds1}
          urlRandomImage={urlRandomImage}
          fetchData={this.fetchData}
        />
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     reducer: state.reducer
//     //breeds: state.breeds
//   };
// };
export default connect(null)(Question);
