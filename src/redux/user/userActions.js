import { VIEW_USERS, ERROR_HUNDLING, DELETE_USER, ADD_USER } from "./userTypes";

import apiCall from "../../helpers/apiCall";

export const viewUsersAction = () => async (dispatch) => {
  try {
    const Response = await apiCall.get("/users");
    dispatch({
      type: VIEW_USERS,
      payload: Response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_HUNDLING,
    });
  }
};

export const addUserAction = (formData) => {
  return (dispatch) => {
    apiCall
      .post("/users", { formData })
      .then((res) => {
        console.log("201: user created", res);
        dispatch({
          type: "ADD_USER",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
