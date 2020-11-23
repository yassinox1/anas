import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
//import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//  const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // ADD suport to redux devttol

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
