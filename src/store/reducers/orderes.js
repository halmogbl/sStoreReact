import * as actionTypes from "../actions/actionTypes";
const initialState = {
  orderes: null,
  orderHistory:null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDERES:
    let newCart = action.payload.find(cart=> cart.status === "NO_ORDER")
      return {
        ...state,
        orderes: newCart,
      };
    case actionTypes.SET_VARIATON_CART:
        let orderItem = state.orderes.order_Items.find(order => order.id === action.payload.id)
        orderItem.quantity = action.payload.quantity
        return {
          ...state,
          orderes: state.orderes
        };
    default:
      return state;
  }
};

export default reducer;
