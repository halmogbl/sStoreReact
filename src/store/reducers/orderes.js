import * as actionTypes from "../actions/actionTypes";
const initialState = {
  orderes: null,
  order_Items: [],
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
    case actionTypes.CREATE_ORDER:
      return {
        ...state,
        orderes: state.orderes.concat(action.payload),
        loading: false
      };
    case actionTypes.CREATE_ORDER_ITEM:
      return {
        ...state,
        order_Items: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
export default reducer;
