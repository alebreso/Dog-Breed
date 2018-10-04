const initState = {};
  
  const counterReducer = (state = initState, action = {}) => {
    switch (action.type) {
      case "COUNTER_QUESTIONS++":
        return { ...state, counterQuestion: action.payload + 1 };
      case "COUNTER_WINS":
        return { ...state, counterWins: action.payload + 1 };
    //   case "PERCENTAGE":
    //     return {return { ...state, percentuage: action.payload};}
      default:
        return state;
    }
  };
  
  export default counterReducer;