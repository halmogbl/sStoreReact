import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import categoriesReducer from "./categories";

import itemReducer from "./items";

import profileReducer from "./profile";
import brandsReducer from "./brands";
import variatonsReducer from "./variatons";
import filterVariablesReducer from "./filterItems";
import orderesReducer from "./orderes";
import searchItems from "./search";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  categoriesReducer: categoriesReducer,
  itemReducer: itemReducer,
  profileReducer: profileReducer,
  brandsReducer: brandsReducer,
  variatonsReducer: variatonsReducer,
  filterVariablesReducer: filterVariablesReducer,
  orderesReducer: orderesReducer,
  searchItems: searchItems
});
