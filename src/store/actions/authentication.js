import axios from "axios";
import jwt_decode from "jwt-decode";
import * as actionTypes from "./actionTypes";
import { setErrors } from "./errors";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

const setAuthToken = token => {
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `JWT ${token}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

export const checkForExpiredToken = () => {
  return dispatch => {
    // Get token
    const token = localStorage.getItem("token");
    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);
      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header although its not needed here because this is not a new login this
        // get the token from the local storage and checks for it's expiry date
        setAuthToken(token);
        //to store the user locally in the reducer
        dispatch(setCurrentUser(user));
        dispatch(getCartList(user.username))
      } else {
        dispatch(logout());
      }
    }
  };
};

export const login = (userData, history, fetch) => {
  return async dispatch => {
    try {
      let response = await instance.post("login/", userData);
      let user = response.data;
      console.log(user);
      setAuthToken(user.token);
      let decodedUser = jwt_decode(user.token);
      dispatch(setCurrentUser(jwt_decode(user.token)));
      dispatch(getCartList(decodedUser.username))
      history.push("/home");
      fetch();
    } catch (err) {
      console.error(err.response);
      setErrors(err.response);
    }
  };
};

export const signup = (userData, history, fetch) => {
  return async dispatch => {
    try {
      let response = await instance.post("register/", userData);
      let user = response.data;
      let decodedUser = jwt_decode(user.token);
      setAuthToken(user.token);
      dispatch(setCurrentUser(decodedUser));
      history.push("/home");
      console.log(user.token);
      fetch();
    } catch (err) {
      console.error(err.response);
      setErrors(err.response);
    }
  };
};


export const setCart = (orderItem, username) => {
  return async dispatch => {
    try {
     let response = await instance.post("orderes/create/");
     let order = response.data;
     console.log("order ==> ", order)
     dispatch(setOrderItem(order.id, orderItem, username))
     dispatch(getCartList(username))
    } catch (error) {
      dispatch({
       type: actionTypes.SET_ERROR,
       payload: error.response.data
     });
    }
  };
};


export const getCartList = (username) => {
  return async dispatch => {
    try {
      let response = await instance.get("orderes/list/");
      let orderes = response.data;
      let orderLogedInUser = orderes.filter(order => order.profile.user.username === username && order.status === "NO_ORDER" && order)
      // console.log("orderLogedInUser  ====> ", orderLogedInUser)
      dispatch({
        type: actionTypes.GET_ORDERES,
        payload: orderLogedInUser
      });
    } catch (error) {
      dispatch({
       type: actionTypes.SET_ERROR,
       payload: error.response.data
     });
    }
  };
};


export const setOrderItem = (orderesid, orderItem, username) => {
  // console.log("orderesid ===> ",orderesid)
  // console.log("orderItem ===> ",orderItem)

  return async dispatch => {
    try {
      await instance.post("orderItem/"+orderesid+"/create/", orderItem);
      dispatch(getCartList(username))
    } catch (err) {
      console.error("Error while fetching categories", err);
    }
  };
};


export const checkoutOrder = (orderesid, username) => {
  console.log("orderesid ===> ", orderesid)
  console.log("username ===> ", username)
  let changeStatus = {
    "status": "ORDERED"
}
  return async dispatch => {
    try {
      await instance.put("orderes/"+orderesid+"/update/", changeStatus);
      dispatch(getCartList(username))
    } catch (err) {
      console.error("Error while fetching categories", err);
    }
  };
};


export const logout = history => {
  setAuthToken();
  history.push("/Login");
  return setCurrentUser();
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
