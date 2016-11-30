import { Router } from "express";
import findFiles from "../lib/find-files";
import { trackFromFile } from "../lib/import";
import config from "../../../config.js";
import db from "../db";

const imports = Router();

imports.get("/", async (req, res) => {
  const musicFiles = findFiles(config.musicDir, (file) => file.match(/\.mp3$/))
        .map((file) => file.replace(new RegExp(`^${config.musicDir}/*`), ""));
  const imports = [];
  await Promise.all(musicFiles.map(async (file) => {
    const track = await db.findOne({ path: file });
    if (!track) {
      imports.push(await trackFromFile(file));
    }
  }));
  res.json(imports);
});

export default imports;
