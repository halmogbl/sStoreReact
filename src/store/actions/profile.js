import * as actionTypes from "./actionTypes";

// AC
import { setErrors } from "./errors";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://134.209.247.1/api/"
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
  const formDataProfile = new FormData();
  formDataProfile.append("phone_number", profile.phone_number);
  if (profile.profile_image_file !== "") {
    formDataProfile.append("image", profile.profile_image_file);
  }
  const formDataUser = new FormData();
  formDataUser.append("first_name", profile.first_name);
  formDataUser.append("last_name", profile.last_name);
  formDataUser.append("email", profile.email);

  return async dispatch => {
    try {
      const resProfile = await instance.put("profile/update/", formDataProfile);
      const resUser = await instance.put(`user/update/`, formDataUser);
      const updatedProfile = resProfile.data;
      const updatedUser = resUser.data;
      dispatch({
        type: actionTypes.UPDATE_PROFILE,
        payload: updatedProfile
      });
      dispatch({
        type: actionTypes.UPDATE_USER,
        payload: updatedUser
      });

      history.push("/profile/home");
    } catch (error) {
      if (error.response) dispatch(setErrors(error.response.data));
      else console.error(error);
    }
  };
};
