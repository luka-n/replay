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
