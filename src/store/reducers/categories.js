import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categories: [],
  filteredCategories: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        filteredCategories: action.payload,
        loading: false
      };
    case actionTypes.POST_CATEGORY:
      return {
        ...state,
        categories: [action.payload].concat(state.categories),
        loading: false
      };

    case actionTypes.FILTER_CATEGORIES:
      return {
        ...state,
        filteredCategories: state.categories.filter(category => {
          return `${category.name} `.toLowerCase().includes(action.payload);
        })
      };

    default:
      return state;
  }
};

export default reducer;
