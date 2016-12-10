// Copyright (C) 2016 Luka Novsak <lnovsak@gmail.com>
//
// This file is part of replay.
//
// replay is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// replay is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with replay.  If not, see <http://www.gnu.org/licenses/>.

import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {syncHistoryWithStore, routerReducer} from "react-router-redux";

import App from "./components/app";
import Library from "./containers/library";
import Queue from "./containers/queue";
import Import from "./containers/import";

import * as reducers from "./reducers";

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Queue} />
        <Route path="library" component={Library} />
        <Route path="import" component={Import} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("main")
);
