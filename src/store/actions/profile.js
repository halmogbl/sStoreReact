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

export const updateProfile = (profile, history) => {
  const formData = new FormData();
  formData.append("phone_number", profile.phone_number);
  if (profile.profile_image_file !== "") {
    formData.append("image", profile.profile_image_file);
  }
  // console.log(profile);
  return async dispatch => {
    try {
      const res = await instance.put("profile/update/", formData);
      const updatedProfile = res.data;
      dispatch({
        type: actionTypes.UPDATE_PROFILE,
        payload: updatedProfile
      });

      history.push("/profile/");
    } catch (error) {
      if (error.response) dispatch(setErrors(error.response.data));
      else console.error(error);
    }
  };
};

export const updateUser = (user, userID) => {
  return async dispatch => {
    try {
      const res = await instance.put(`user/${userID}/update/`, user);
      const updatedUser = res.data;
      dispatch({
        type: actionTypes.UPDATE_USER,
        payload: updatedUser
      });
    } catch (error) {
      if (error.response) dispatch(setErrors(error.response.data));
      else console.error(error);
    }
  };
};
