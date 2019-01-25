import mOrm from "./mOrm";

let db = new mOrm();

let result = db.createConnection("postgres://user:pass@host:port/db");
