import * as actionTypes from "./actionTypes";

// AC
// import { setErrors } from "./errors";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://134.209.247.1/api/"
});

export const fetchCategories = () => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await instance.get("category/list/");
      // to get data from object reponse
      let categories = response.data;
      //to send to reducer
      // console.log(categories);
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

// export const filterCategories = query => {
//   return {
//     type: actionTypes.FILTER_CATEGORIES,
//     payload: query.toLowerCase()
//   };
// };
