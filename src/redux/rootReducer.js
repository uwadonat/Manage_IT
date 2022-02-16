import { combineReducers } from "redux";
import addUserReducer from "./user/addUserReducer";
import viewUsersReducer from "./user/viewUserReducer";

const rootReducer = combineReducers({
  users: viewUsersReducer,
  new: addUserReducer
});

export default rootReducer;
