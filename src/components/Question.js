import React, { Component } from "react";
import request from "superagent";

export default class Question extends Component {
  state = {
    images: [],
    breeds: []
  };

  componentDidMount() {
    request
      .get("https://dog.ceo/api/breeds/image/random/3")
      .then(response => this.setState({ images: response.body.message }))
      // imgs.push(response.body.message);
      .catch(console.error);
  }
  getBreedsFromUrl = () => {
    console.log(this.state);
    let imgs = this.state.images;
    console.log(imgs);
    let ab = imgs.map(url => url.split("/"));

    let cd = ab.map(str => str[4]);
    return cd;
  };

  getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return this.state.images[randomIndex];
  };
  render() {
    return (
      <div>
        <img className="question" alt="" src={this.getRandomImage()} />
        {this.getBreedsFromUrl()}
      </div>
    );
  }
}
