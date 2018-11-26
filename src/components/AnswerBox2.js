import React, { Component } from "react"; 
import store from "../store";
import { connect } from 'react-redux'

class AnswerBox extends Component {
  handleClick = e => {
    const idUrl= e.target.id;
    const breed = this.props.breed;
    if (idUrl.includes(breed)) {
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
    return (
      <div className="AnswerBox">
        {this.props.urlImages.map((url,i) => (
          <img
            scr={url}
            className="Answers"
            id={url}
            alt={url}
            key={i}
            onClick={this.handleClick}/>
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