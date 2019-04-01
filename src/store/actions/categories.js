import * as actionTypes from "./actionTypes";

// AC
import { setErrors } from "./errors";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const fetchCategories = () => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await instance.get("category/list/");
      // to get data from object reponse
      let categories = response.data;
      //to send to reducer
      dispatch({
        type: actionTypes.FETCH_CATEGORIES,
        payload: categories
      });
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error ferching the categories");
    }
  };
};

export const filterCategories = query => {
  return {
    type: actionTypes.FILTER_CATEGORIES,
    payload: query.toLowerCase()
  };
};

export const postCategory = (category, reset) => {
  return async dispatch => {
    try {
      const res = await instance.post("category/create/", category);
      const newCategory = res.data;
      dispatch({
        type: actionTypes.POST_CATEGORY,
        payload: newCategory
      });
      reset();
    } catch (error) {
      if (error.response) dispatch(setErrors(error.response.data));
      else console.error(error);
    }
  };
};
