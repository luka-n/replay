import {Router} from "express";
import {trackFromFile} from "../lib/import";
import config from "../../../config.js";
import db from "../db";

const tracks = Router();

tracks.get("/", async (req, res) => {
  const tracks = await db.find({});
  res.json(tracks);
});

tracks.post("/", async (req, res) => {
  const file = req.body.file;
  await db.insert(await trackFromFile(file));
  res.status(201).end();
});

tracks.get("/:id", async (req, res) => {
  const track = await db.findOne({_id: req.params.id});
  res.sendFile(`${config.musicDir}/${track.path}`);
});

export default tracks;
