import * as actionTypes from "./actionTypes";

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

export const categoriesItems = items => {
  console.log("from-actions", items);
  return async dispatch => {
    dispatch({
      type: actionTypes.CATEGORIESITEMS,
      payload: items
    });
  };
};
