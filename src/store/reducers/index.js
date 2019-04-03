import { combineReducers } from "redux";

// Reducers

import errorReducer from "./errors";
import categoriesReducer from "./categories";
import itemReducer from "./items";

export default combineReducers({
  errors: errorReducer,
  categoriesReducer: categoriesReducer,
  itemReducer: itemReducer
});
