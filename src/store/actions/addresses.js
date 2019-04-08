import * as actionTypes from "./actionTypes";

// AC
import { setErrors } from "./errors";
import { fetchProfile } from "./profile";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const postAddress = (address, history) => {
  return async dispatch => {
    try {
      const res = await instance.post("address/create/", address);
      const newAddress = res.data;
      dispatch({
        type: actionTypes.POST_ADDRESS,
        payload: newAddress
      });
      history.push("/profile/");
    } catch (error) {
      if (error.response) dispatch(setErrors(error.response.data));
      else console.error(error);
    }
  };
};

export const updateAddress = (address, history, addressID) => {
  address = {
    ...address,
    address: [addressID]
  };
  return async dispatch => {
    try {
      const res = await instance.put(`address/${addressID}/update/`, address);
      const updatedAddress = res.data;
      dispatch({
        type: actionTypes.UPDATE_ADDRESS,
        payload: updatedAddress
      });

      history.push("/profile/home");
    } catch (error) {
      if (error.response) dispatch(setErrors(error.response.data));
      else console.error(error);
    }
  };
};

export const deleteAddress = (address, addressID) => {
  address = {
    ...address,
    address: [addressID]
  };
  return async dispatch => {
    try {
      const res = await instance.delete(
        `address/${addressID}/delete/`,
        address
      );
      const deleteAddress = res.data;
      dispatch({
        type: actionTypes.DELETE_ADDRESS,
        payload: deleteAddress
      });
      dispatch(fetchProfile());
    } catch (error) {
      if (error.response) dispatch(setErrors(error.response.data));
      else console.error(error);
    }
  };
};
