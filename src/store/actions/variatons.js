import * as actionTypes from "./actionTypes";
// import { setErrors } from "./errors";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const fetchVariatons = () => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await instance.get(`variaton/list/`);
      // to get data from object reponse
      let variatons = response.data;
      console.log("variaton", variatons);
      //to send to reducer
      // console.log(categories);

      dispatch({
        type: actionTypes.FETCH_VARIATONS,
        payload: variatons
      });
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error feching the variatons");
    }
  };
};

export const setVaraition = id => {
  return async dispatch => {
    dispatch({
      type: actionTypes.SET_VARIATON,
      payload: id
    });
  };
};

export const setVaraitionCart = (id,quantity) => {
  let variaton = {id: id, quantity: quantity}
  console.log("variaton ===> ", variaton)
  return async dispatch => {
    dispatch({
      type: actionTypes.SET_VARIATON_CART,
      payload: variaton
    });
  };
};
