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

import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";

import {browserHistory, Router} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";

import configureStore from "../shared/store/configure-store";
import routes from "../shared/routes";

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById("main")
);
