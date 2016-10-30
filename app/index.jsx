import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import { createRenderer } from "fela";
import { Provider as FelaProvider } from "react-fela";

import Replay from "./components/replay";
import Library from "./containers/library";
import Queue from "./containers/queue";

import "./index.css";

import * as reducers from "./reducers";

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const history = syncHistoryWithStore(browserHistory, store);

const renderer = createRenderer();

ReactDOM.render(
  <FelaProvider renderer={renderer}
                mountNode={document.getElementById("stylesheet")}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Replay}>
          <IndexRoute component={Queue} />
          <Route path="library" component={Library} />
        </Route>
      </Router>
    </Provider>
  </FelaProvider>,
  document.getElementById("index")
);
