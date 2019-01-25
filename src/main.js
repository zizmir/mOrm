import mOrm from "./mOrm";
import { Core } from "./engine/core";

let db = new mOrm();

let result = db.createConnection("postgres://delafuente:@localhost:5432/morm");
