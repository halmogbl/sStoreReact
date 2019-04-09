import * as actionTypes from "../actions/actionTypes";

const initialState = {
  variatons: [],
  loading: true,
  variaton: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VARIATONS:
      return {
        ...state,
        variatons: action.payload,
        loading: false
      };
    case actionTypes.SET_VARIATON:
      return {
        ...state,
        variaton: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
