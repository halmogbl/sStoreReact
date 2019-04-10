import * as actionTypes from "../actions/actionTypes";

const initialState = {
  item: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ITEM_DETAIL:
      return {
        ...state,
        item: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
