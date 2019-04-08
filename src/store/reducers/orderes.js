import * as actionTypes from "../actions/actionTypes";
const initialState = {
  orderes: [],
  loading: true
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERES:
      return {
        ...state,
        orderes: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
export default reducer;
