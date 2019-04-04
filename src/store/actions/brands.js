import * as actionTypes from "./actionTypes";
// import { setErrors } from "./errors";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const fetchBrands = () => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await instance.get(`brand/list/`);
      // to get data from object reponse
      let brands = response.data;
      //to send to reducer
      // console.log(categories);

      dispatch({
        type: actionTypes.FETCH_BRANDS,
        payload: brands
      });
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error ferching the brands");
    }
  };
};