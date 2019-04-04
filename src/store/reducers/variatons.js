import * as actionTypes from "../actions/actionTypes";

const initialState = {
  variatons: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VARIATONS:
      return {
        ...state,
        variatons: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
