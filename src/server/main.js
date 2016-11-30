import express from "express";
import bodyParser from "body-parser";

import imports from "./routes/imports";
import tracks from "./routes/tracks";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/imports", imports);
app.use("/tracks", tracks);

app.listen(9090, () => {
  console.log("Listening on port 9090 ...");
});
