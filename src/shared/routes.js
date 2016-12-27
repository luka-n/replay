import React from "react";
import {IndexRoute, Route} from "react-router";

import App from "./components/app";
import Import from "./containers/import";
import Library from "./containers/library";
import Queue from "./containers/queue";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Queue} />
    <Route path="library" component={Library} />
    <Route path="import" component={Import} />
  </Route>
);
