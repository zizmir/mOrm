//postgres://bouznir:@localhost:5432/express.island.dev
import mOrm from "./mOrm";
import Core from "./engine/core";
import Student from "./entities/student";

// Let's Rock!
const orm = new mOrm();

orm.createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "delafuente",
  password: "",
  database: "morm",
  synchronize: true,
  entities: [Student]
});

// or:
