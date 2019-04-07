import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: true,
  addresses: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_ADDRESS:
      return {
        ...state,
        addresses: action.payload,
        loading: false
      };
    case actionTypes.UPDATE_ADDRESS:
      return {
        ...state,
        addresses: action.payload,
        loading: false
      };
    case "DELETE_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.filter(
          address => action.payload !== address
        ),
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
