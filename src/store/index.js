import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as actionCreators from "./actions";
import reducerFile from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducerFile,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
