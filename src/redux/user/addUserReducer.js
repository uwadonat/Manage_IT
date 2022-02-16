import { ADD_USER } from "./userTypes";

export const initialState = {
    user: [],
  };
  

const addUserReducer = (state = initialState, action) => {
    switch (action.type) {
    
      case ADD_USER:
        const user = action.payload;
        return { ...state, user };
  
      default:
        return state;
    }
  };

  export default addUserReducer;