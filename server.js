import fs from "fs";

import Datastore from "nedb-promise";
import Express from "express";

const app = Express();
const db = new Datastore({filename: "db/tracks.db", autoload: true});

app.set("view engine", "ejs");
app.use(Express.static("./"));

app.get("/", (req, res) => {
  return res.render("index");
});

app.get("/tracks", async (req, res) => {
  const tracks = await db.find({});
  res.send(tracks);
});

app.get("/tracks/:id", async (req, res) => {
  const track = await db.findOne({_id: req.params.id});
  res.setHeader("Content-Type", "audio/mpeg");
  fs.createReadStream(track.path).pipe(res);
});

app.listen(9000, () => {
  console.log("Listening on port 9000 ...");
});
