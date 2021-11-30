import {
  VIEW_PROFILE_ERROR,
  VIEW_PROFILE_SUCCESS
} from "../../actionTypes/profileActionTypes";

import initialState from "../../store/initialState";

const viewProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_PROFILE_SUCCESS:
      return {
        ...state,
        viewProfileSuccess: action.payload
      };
    case VIEW_PROFILE_ERROR:
      return {
        ...state,
        viewProfileError: action.payload
      };
    default:
      return state;
  }
};

export default viewProfileReducer;
