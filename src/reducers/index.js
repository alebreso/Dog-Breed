import { combineReducers } from "redux";
import reducer from "./reducer";
import counterReducer from "./CounterReducer"

export default combineReducers({
  reducer,
  counterReducer
});
