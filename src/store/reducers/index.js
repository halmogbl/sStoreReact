import { combineReducers } from "redux";

// Reducers

import errorReducer from "./errors";
import categoriesReducer from "./categories";

export default combineReducers({
  errors: errorReducer,
  categoriesReducer: categoriesReducer
});
