import * as actionTypes from "./actionTypes";
// import { setErrors } from "./errors";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const fetchItemDetail = id => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await instance.get(`item/${id}/detail/`);
      // to get data from object reponse
      let item = response.data;
      //to send to reducer
      // console.log(categories);

      dispatch({
        type: actionTypes.FETCH_ITEM_DETAIL,
        payload: item
      });
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error ferching the categories");
    }
  };
};
export const filterItems = query => {
  return {
    type: actionTypes.FILTER_ITEMS,
    payload: query.toLowerCase()
  };
};

// export const filterCategories = query => {
//   return {
//     type: actionTypes.FILTER_CATEGORIES,
//     payload: query.toLowerCase()
//   };
// };
