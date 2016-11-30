import id3 from "music-tag";
import config from "../../../config.js";

// file path to be given relative to music dir
export async function trackFromFile(file) {
  const tags = await id3.read(`${config.musicDir}/${file}`);
  return { path: file, tags: tags.data };
}
