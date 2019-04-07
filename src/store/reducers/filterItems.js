import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categoriesItems: [],
  itemList: [],
  filteredItems: [],
  brand: "",
  color: "",
  priceFrom: "",
  priceTo: "",
  size: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETBRAND:
      return {
        ...state,
        brand: action.payload
      };
    case actionTypes.GETCOLOR:
      return {
        ...state,
        color: action.payload
      };
    case actionTypes.GETSIZE:
      return {
        ...state,
        size: action.payload
      };
    case actionTypes.GETPRICEFROM:
      return {
        ...state,
        priceFrom: action.payload
      };
    case actionTypes.GETPRICETO:
      return {
        ...state,
        priceTo: action.payload
      };
    case actionTypes.CATEGORIESITEMS:
      let items = state.categoriesItems.map(item => item);
      let allItem = items.map(item => ({ items: item.items }));
      allItem.forEach(item =>
        item.items.map(item => state.itemList.push(item))
      );
      console.log("lovly list", state.itemList);
      return {
        ...state,
        categoriesItems: action.payload
      };
    case actionTypes.APPLYFILTER:
      let filter = action.payload;
      let list = state.itemList;
      console.log("haaaay", list);
      if (filter.color === list)
        return {
          ...state,
          filteredItems: []
        };

    default:
      return state;
  }
};

export default reducer;
