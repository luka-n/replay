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
import {match, RouterContext} from "react-router";
import {Provider} from "react-redux";
import {renderToString} from "react-dom/server";
import configureStore from "../../shared/store/configure-store";
import RadiumProvider from "../../shared/components/radium-provider";
import routes from "../../shared/routes";

function renderFullPage(html, preloadedState) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>replay</title>
  </head>
  <body>
    <div id="main">${html}</div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)};
    </script>
    <script src="/bundle.js"></script>
  </body>
</html>
  `;
}

export default function client(req, res) {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const store = configureStore();
      const html = renderToString(
        <RadiumProvider radiumConfig={{userAgent: req.headers["user-agent"]}}>
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        </RadiumProvider>
      );
      const preloadedState = store.getState();
      res.send(renderFullPage(html, preloadedState));
    } else {
      res.status(404).send("Not found");
    }
  });
}
