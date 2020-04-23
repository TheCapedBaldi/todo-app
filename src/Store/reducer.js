import { combineReducers } from "redux";
import todos from "./todos/reducer";

const reducer = combineReducers({
  todos,
});

export default reducer;
