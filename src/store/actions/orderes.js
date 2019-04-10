import * as actionTypes from "./actionTypes";
// import { setErrors } from "./errors";
import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});
export const fetchOrderes = user => {
  return async dispatch => {
    try {
      let response = await instance.get(`orderes/list/`);
      let orderes = await response.data;

      let myorder = orderes.filter(
        order =>
          order.status === "NO_ORDER" &&
          order.profile.user.username === user.username
      );

      dispatch({
        type: actionTypes.FETCH_ORDERES,
        payload: myorder
      });
    } catch (error) {
      console.error(error);
      console.log("there is an error feching the orderes");
    }
  };
};
export const createOrder = cart => {
  return async dispatch => {
    try {
      let response = await instance.post(`orderes/create/`, cart);
      let ordere = response.data;
      dispatch({
        type: actionTypes.CREATE_ORDER,
        payload: ordere
      });
    } catch (error) {
      console.error(error);
      console.log("there is an error feching the orderes");
    }
  };
};
export const createOrderItem = (orderDetail, order_ID) => {
  return async dispatch => {
    try {
      let response = await instance.post(
        `orderItem/${order_ID}/create/`,
        orderDetail
      );
      let ordere = response.data;
      dispatch({
        type: actionTypes.CREATE_ORDER_ITEM,
        payload: ordere
      });
    } catch (error) {
      console.error(error);
      console.log("there is an error feching the orderes");
    }
  };
};
