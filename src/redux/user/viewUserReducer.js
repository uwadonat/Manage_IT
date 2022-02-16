import { VIEW_USERS, DELETE_USER} from "./userTypes";

export const initialState = {
  userInfo: [],
};

const viewUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_USERS:
      return {
        ...state,
        userInfo: action.payload,
      };
   
    default:
      return state;
  }
};

const deleteUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state, userInfo: state.userInfo.splice(action.payload, 1)
      };
  }
};

export default viewUsersReducer;
