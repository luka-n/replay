import bodyParser from "body-parser";
import {Router} from "express";
import imports from "./imports";
import tracks from "./tracks";

const api = Router();

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: true}));

api.use("/imports", imports);
api.use("/tracks", tracks);

export default api;
