import * as actionTypes from "../actions/actionTypes";

const initialState = {
  Items: [],
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
      // let items = state.categoriesItems.map(item => item);
      // let allItem = items.map(item => ({ items: item.items }));
      // allItem.forEach(item =>
      //   item.items.map(item => state.itemList.push(item))
      // );
      // console.log("lovly list", state.itemList);
      return {
        ...state,
        Items: action.payload
      };
    case actionTypes.APPLYFILTER:
      let filter = action.payload;
      console.log(filter);
      // let list = state.itemList;
      // console.log("if this global", filter.brand);

      // state.Items.map(item =>
      //   // console.log("try", ...item.items.map(variation => variation.color))
      // );
      // console.log(state.Items[0].items[0].color);

      let variationFilt = state.Items.filter(item => {
        if (item.items.length) {
          if (
            item.brand.name === filter.brand &&
            (item.items[0].color === filter.color ||
              item.items[0].size === filter.size ||
              filter.priceFrom <= item.items[0].price <= filter.priceTo)
          ) {
            return item.items[0];
          }
        }
      });
      console.log("Variation", variationFilt);
      // let filterdColors = state.Items.map(item =>
      //   item.items.map(variation => variation.color)
      // );
      // let filterdSizes = state.Items.map(item =>
      //   item.items.map(variation => variation.size)
      // );

      // let filterdPrices = state.Items.map(item =>
      //   item.items.map(variation => variation.price)
      // );

      // console.log("my color", filterdColors);
      // console.log("my sizes", filterdSizes);
      // console.log("my price", filterdPrices);

      let filtered = state.Items.filter(
        item =>
          item.brand.name === filter.brand &&
          item.items.map(variation => variation.color) === filter.color
      );
      console.log("final-reducaer", filtered);

      // if (filter.color === list)
      return {
        ...state,
        filteredItems: variationFilt
      };

    default:
      return state;
  }
};

export default reducer;
