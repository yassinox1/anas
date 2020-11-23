import React from "react";
import { render } from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";
import ErrorBoundry from "./utils/ErrorBoundary";
import store from "./redux/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./redux/actions/AuthActions";
import jwt from "jsonwebtoken";
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken).user));
}
render(
  <ErrorBoundry>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </ErrorBoundry>,
  document.getElementById("root")
);
