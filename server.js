import datastore from "nedb-promise";
import express from "express";
import serveStatic from "serve-static";

import config from "./config";

const app = express();
const db = datastore({filename: "db/tracks.db", autoload: true});

app.use(serveStatic(config.musicDir));

app.get("/api/tracks", async (req, res) => {
  const tracks = await db.find({});
  const tracksWithSrc = tracks.map((track) => ({
    ...track,
    src: `${config.fileServer}/${track.path}`
  }));
  res.send(tracksWithSrc);
});

app.listen(9090, () => {
  console.log("Listening on port 9090 ...");
});
