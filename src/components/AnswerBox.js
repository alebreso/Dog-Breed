import React, { Component } from "react"; 
import store from "../store";
import { connect } from 'react-redux'


class AnswerBox extends Component {
  handleClick = e => {
    const id = e.target.id;
    const image = this.props.urlRandomImage;
    if (image.includes(id)) {
      store.dispatch({
        type:"COUNTER_WINS",
        payload: this.props.counterWins
      })
      this.props.fetchData();
    } else {
      console.log("Wrong Answer");
      setTimeout(this.props.fetchData,2000)
    }
  };

  render() {
    store.dispatch({
      type: "LOAD_IMG",
      payload: this.props.urlRandomImage
    });
    return (
      <div className="AnswerBox">
        {this.props.breeds.map(breed => (
          <span
            className="Answers"
            id={breed}
            key={breed}
            onClick={this.handleClick}>
            {breed}
          </span>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return{
		counterWins: state.counterReducer.counterWins || 0,
		counterQuestions: state.counterReducer.counterQuestion || 0
	}
}

export default connect(mapStateToProps)(AnswerBox)
