//postgres://bouznir:@localhost:5432/express.island.dev
import mOrm from "./mOrm";

// Let's Rock!
const orm = new mOrm();

orm.createConnection("postgres://bouznir:@localhost:5432/express.island.dev");

// or:
