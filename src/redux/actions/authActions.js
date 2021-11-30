import {
  VIEW_PROFILE_ERROR,
  VIEW_PROFILE_SUCCESS
} from "../actionTypes/profileActionTypes";

import apiCall from "../../helpers/apiCall";

export const viewProfileAction = () => async (dispatch) => {
  try {
    const body = {
      action:"viewProfile"
    };
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VySW1hZ2UiOiJodHRwczpcL1wvZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tXC92MFwvYlwvbGVhcm5iYXNlLWJhYTZkLmFwcHNwb3QuY29tXC9vXC80MDMyZDY0OS02YWZlLTQ1OTItYjkyZS0yZGU4Y2I4YmNmM2U_YWx0PW1lZGlhJnRva2VuPWU2MDU2NWM4LTRhZWItNDhlYi1iOTUwLTAyMTg5YzAyYWY4OCIsInBob25lIjoiMjUwNzgxOTcyOTQyIiwidXNlck5hbWUiOiJFbW1hbnVlbCIsInJvbGUiOiJjbGllbnQiLCJpYXQiOjE2MTEzNDE4Nzd9._VcWpswpkNJjtR4Lml-tLQttVbzAsNf-hLK9goL6BXs";
    const viewProfileResponse = await apiCall.post("/index",
    body,
    {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${token}`
      }
    });
    dispatch({
      type: VIEW_PROFILE_SUCCESS,
      payload: viewProfileResponse.data
    });
   console.log('_____________RESPONSE_________',viewProfileResponse.data.data);
  } catch (error) {
    //console.log('__________________ERROR_____', error);
    dispatch({
      type: VIEW_PROFILE_ERROR,
      payload: error.response
    });
  }
};
