import * as actionTypes from "./actionTypes";
// import { setErrors } from "./errors";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const fetchSearchItems = () => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await instance.get(`item/list/`);
      // to get data from object reponse
      let searchItems = response.data;
      console.log("fetchSearchItems from action --------------->", searchItems);
      //to send to reducer
      // console.log(categories);

      dispatch({
        type: actionTypes.SEARCH_ITEMS,
        payload: searchItems
      });
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error feching the variatons");
    }
  };
};
