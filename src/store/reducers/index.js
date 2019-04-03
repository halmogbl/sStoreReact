import { combineReducers } from "redux";

// Reducers

import errorReducer from "./errors";
import categoriesReducer from "./categories";
import profileReducer from "./profile";

export default combineReducers({
  errors: errorReducer,
  categoriesReducer: categoriesReducer,
  profileReducer: profileReducer
});
