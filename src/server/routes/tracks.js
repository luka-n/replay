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
