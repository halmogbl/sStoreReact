import * as actionTypes from "./actionTypes";

// import { setErrors } from "./errors";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://134.209.247.1/api/"
});

export const categoriesItems = () => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await instance.get(`item/list/`);
      // to get data from object reponse
      let items = response.data;
      console.log("itemslist----from-actions", items);
      //to send to reducer
      // console.log(categories);

      dispatch({
        type: actionTypes.CATEGORIESITEMS,
        payload: items
      });
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error feching the brands");
    }
  };
};
export const getBrand = brand => {
  return async dispatch => {
    dispatch({
      type: actionTypes.GETBRAND,
      payload: brand
    });
  };
};

export const getColor = color => {
  return async dispatch => {
    dispatch({
      type: actionTypes.GETCOLOR,
      payload: color
    });
  };
};
export const getSize = size => {
  return async dispatch => {
    dispatch({
      type: actionTypes.GETSIZE,
      payload: size
    });
  };
};

export const getPriceFrom = from => {
  return async dispatch => {
    dispatch({
      type: actionTypes.GETPRICEFROM,
      payload: from
    });
  };
};
export const getPriceTo = to => {
  return async dispatch => {
    dispatch({
      type: actionTypes.GETPRICETO,
      payload: to
    });
  };
};

export const applyFilter = appliedFilters => {
  return async dispatch => {
    dispatch({
      type: actionTypes.APPLYFILTER,
      payload: appliedFilters
    });
  };
};

// export const categoriesItems = items => {
//   console.log("from-actions", items);
//   return async dispatch => {
//     dispatch({
//       type: actionTypes.CATEGORIESITEMS,
//       payload: items
//     });
//   };
// };
