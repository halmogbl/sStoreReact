import * as actionTypes from "../actions/actionTypes";

const initialState = {
  brands: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BRANDS:
      return {
        ...state,
        brands: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
