import bodyParser from "body-parser";
import datastore from "nedb-promise";
import express from "express";
import fs from "fs";
import id3 from "music-tag";
import serveStatic from "serve-static";

import config from "./config";

const app = express();
const db = datastore({filename: "db/tracks.db", autoload: true});

// file path to be given relative to music dir
async function trackFromFile(file) {
  const tags = (await id3.read(`${config.musicDir}/${file}`)).data;
  return { path: file, tags };
}

function findFiles(dir, test) {
  return fs.readdirSync(dir)
    .reduce((files, file) => {
      const path = `${dir}/${file}`;
      const stats = fs.statSync(path);
      if (stats.isFile() && test(file)) {
        return files.concat(path);
      } else if (stats.isDirectory()) {
        return files.concat(findFiles(path, test));
      } else {
        return files;
      }
    }, []);
}

app.use(bodyParser.json());
app.use(serveStatic(config.musicDir));

app.get("/api/tracks", async (req, res) => {
  const tracks = await db.find({});
  const tracksWithSrc = tracks.map((track) => ({
    ...track,
    src: `${config.fileServer}/${track.path}`
  }));
  res.send(tracksWithSrc);
});

app.post("/api/tracks", async (req, res) => {
  const file = req.body.file;
  await db.insert(await trackFromFile(file));
  res.status(201).end();
});

app.get("/api/imports", async (req, res) => {
  const musicFiles = findFiles(config.musicDir, (file) => file.match(/\.mp3$/))
        .map((file) => file.replace(new RegExp(`^${config.musicDir}/*`), ""));
  const imports = [];
  await Promise.all(musicFiles.map(async (file) => {
    const track = await db.findOne({path: file});
    if (!track) {
      imports.push(await trackFromFile(file));
    }
  }));
  res.json(imports);
});

app.listen(9090, () => {
  console.log("Listening on port 9090 ...");
});
