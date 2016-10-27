import Datastore from "nedb-promise";
import Express from "express";
import serveStatic from "serve-static";

const app = Express();
const db = new Datastore({filename: "db/tracks.db", autoload: true});

import config from "../config";

app.use(serveStatic(config.musicDir));

app.get("/api/tracks", async (req, res) => {
  const tracks = await db.find({});
  res.send(tracks);
});

app.listen(9090, () => {
  console.log("Listening on port 9090 ...");
});
