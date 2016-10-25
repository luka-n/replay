import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import Replay from "./components/replay";

import reducer from "./reducers";

import "./index.scss";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Replay />
  </Provider>,
  document.getElementById("index")
);
