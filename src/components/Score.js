import React, { Component } from 'react'
import { connect } from 'react-redux'


class Score extends Component {
	
  render() {
    return (
      <div className="score-container">
          <div className="counter-questions">Games:{this.props.counterQuestions}</div>
					<div className="counter-wins">Wins:{this.props.counterWins}</div>
					<div className="percentuage">{(this.props.counterWins * this.props.counterQuestions)/100}</div>
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

