import datastore from "nedb-promise";

export default datastore({ filename: __dirname + "/../../db/tracks.db", autoload: true });
