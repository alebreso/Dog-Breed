const initState = {
  images: null,
  breeds: null,
  counterQuestion: 0,
  counterWins: 0
};

const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "RIGHT_ANSWER":
      return action.payload.counterQuestion;
    case "LOAD_IMG":
      return { images: action.payload };
    case "LOAD_BREEDS":
      return Object.assign({ breeds: action.payload }, state);
    case "COUNTER_QUESTION++":
      return Object.assign({ counterQuestion: action.payload + 1 }, state);
    default:
      return state;
  }
};

export default reducer;
