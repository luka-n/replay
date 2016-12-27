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

import express from "express";
import morgan from "morgan";
import api from "./routes/api";
import client from "./middleware/client";
// webpack dev only imports
import webpack from "webpack";
import webpackConfig from "./webpack.config";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

const app = express();

// logging middleware
app.use(morgan(app.get("env") === "development" ? "dev" : "short"));

// serve webpack hot in development
if (app.get("env") === "development") {
  const webpackCompiler = webpack(webpackConfig);
  app.use(webpackMiddleware(webpackCompiler, {noInfo: true}));
  app.use(webpackHotMiddleware(webpackCompiler));
}

// serve public/ directory (where webpack build should be) in production
if (app.get("env") === "production") {
  // no directory indexing, just serve the files by name
  // for one this prevents the middleware from hijacking / from the client
  app.use(express.static(__dirname + "/../../public/", {index: false}));
}

app.use("/api", api);

app.use(client);

app.listen(9090, () => {
  console.log("Listening on port 9090 ..."); // eslint-disable-line no-console
});
