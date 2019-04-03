import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import categoriesReducer from "./categories";
import profileReducer from "./profile";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  categoriesReducer: categoriesReducer,
  profileReducer: profileReducer
});
