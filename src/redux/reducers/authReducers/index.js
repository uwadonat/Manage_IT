import { combineReducers } from "redux";
import viewProfileReducer from "./viewProfileReducer";

export default combineReducers({
  viewProfile: viewProfileReducer
});
