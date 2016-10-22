import fs from "fs";

import Datastore from "nedb-promise";
import Express from "express";

const app = Express();
const db = new Datastore({filename: "db/tracks.db", autoload: true});

app.get("/api/tracks", async (req, res) => {
  const tracks = await db.find({});
  res.send(tracks);
});

app.get("/api/tracks/:id", async (req, res) => {
  const track = await db.findOne({_id: req.params.id});
  res.setHeader("Content-Type", "audio/mpeg");
  fs.createReadStream(track.path).pipe(res);
});

app.listen(9090, () => {
  console.log("Listening on port 9090 ...");
});
