import { combineReducers } from "redux";
import viewUsersReducer from "./user/viewUserReducer";

const rootReducer = combineReducers({
  user: viewUsersReducer,
});

export default rootReducer;
