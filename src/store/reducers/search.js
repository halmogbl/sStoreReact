import * as actionTypes from "../actions/actionTypes";

const initialState = {
  searchfiltered: [],
  searchItems: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_ITEMS:
      return {
        ...state,
        searchItems: action.payload
      };
    case actionTypes.FILTER_ITEMS:
      return {
        ...state,
        searchfiltered: state.searchItems.filter(item => {
          return `${item.name}`.toLowerCase().includes(action.payload);
        })
      };

    default:
      return state;
  }
};

export default reducer;
