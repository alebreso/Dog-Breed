const initState = {
  image: null,
  breeds: null
};

const reducer = (state = initState, action ) => {
  switch (action.type) {
    case "LOAD_IMG":
      return { ...state, image: action.payload };
    case "LOAD_BREEDS":
      return { ...state, breeds: action.payload };
    default:
      return state;
  }
};

export default reducer;
