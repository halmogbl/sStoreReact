import * as actionTypes from "./actionTypes";

// AC
import { setErrors } from "./errors";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const fetchProfile = () => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await instance.get("profile/");
      // to get data from object reponse
      let profile = response.data;
      //to send to reducer
      dispatch({
        type: actionTypes.FETCH_PROFILE,
        payload: profile
      });
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error ferching the profile");
    }
  };
};
