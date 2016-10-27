import fs from "fs";

import Datastore from "nedb-promise";
import id3 from "music-tag";

import config from "../config"

const db = new Datastore({filename: "db/tracks.db", autoload: true});

async function importFile(file) {
  const track = await db.findOne({path: file});
  if (!track) {
    const tags = await id3.read(file);
    const regex = new RegExp(`^${config.musicDir}/*`);
    const relpath = file.replace(regex, "");
    db.insert({path: relpath, tags: tags.data});
  }
}

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  files.map((file) => {
    const path = `${dir}/${file}`;
    const stats = fs.statSync(path);
    if (stats.isFile() && file.match(/.mp3$/)) {
      importFile(path);
    } else if (stats.isDirectory()) {
      scanDir(path);
    }
  });
}

scanDir(config.musicDir);
