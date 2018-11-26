import React, { Component } from 'react'
import { connect } from 'react-redux'


class Score extends Component {
	
  render() {
    const counterGame = this.props.counterQuestions || 0;
    let counterQuestions = 0;
    if(counterGame !== 0) {counterQuestions = counterGame - 1}
    else {counterQuestions = 0}
    const counterWins = this.props.counterWins;
    let percentage = Math.floor((counterWins / counterQuestions)*100)
    if(!percentage) percentage=0
    return (
      <div className="score-container">
          <div className="counter-questions">GAME LEVEL:{counterGame}</div>
          <div className="matches">Questions Answers:{counterQuestions}</div>
					<div className="counter-wins">Wins:{counterWins}</div>
					<div className="percentage">Percentage of wins:{percentage}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return{
		counterWins: state.counterReducer.counterWins || 0,
		counterQuestions: state.counterReducer.counterQuestion || 0
	}
}

export default connect(mapStateToProps)(Score)

