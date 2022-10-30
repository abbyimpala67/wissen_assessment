import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import reducer from "./reducer/index";
import thunk from "redux-thunk";

const intialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  intialState,
  composeEnhancers(applyMiddleware(thunk))
);

// const store = createStore(reducer);

export default store;
