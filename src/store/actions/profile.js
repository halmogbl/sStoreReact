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

export const putProfile = (profile, reset, history) => {
  const formData = new FormData();
  formData.append("phone_number", profile.phone_number);
  formData.append("profile_image", profile.profile_image);
  // console.log(profile);
  return async dispatch => {
    try {
      const res = await instance.put("profile/update/", formData);
      const updatedProfile = res.data;
      dispatch({
        type: actionTypes.PUT_PROFILE,
        payload: updatedProfile
      });
      reset();
      history.push("/profile");
    } catch (error) {
      if (error.response) dispatch(setErrors(error.response.data));
      else console.error(error);
    }
  };
};
