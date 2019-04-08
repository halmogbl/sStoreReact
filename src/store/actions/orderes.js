import * as actionTypes from "./actionTypes";
// import { setErrors } from "./errors";
import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});
export const fetchOrderes = () => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await instance.get(`orderes/list/`);
      // to get data from object reponse
      let orderes = response.data;
      // console.log("acation Orderes", orderes);
      //to send to reducer
      // console.log();
      dispatch({
        type: actionTypes.FETCH_ORDERES,
        payload: orderes
      });
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error feching the orderes");
    }
  };
};
