import { combineReducers } from "redux";
import todos from "./todos/reducer";
import userActions from "./userActions/reducer";

const reducer = combineReducers({
  todos,
  userActions,
});

export default reducer;
