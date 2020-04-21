import { combineReducers } from "redux";
import app from "./app/reducer";

const reducer = combineReducers({
  app,
});

export default reducer;
