import { isEmpty } from "lodash";
import { existsSync } from "fs";
export default class mOrm {
  constructor() {
    this.config = {};
  }
  // { host, port , username , pass }
  // postgres
  async createConnection(dbConfig = {}) {
    let configPathName = "./mOrm.config.js";
    // check
    if (isEmpty(dbConfig)) {
      console.log("plop", existsSync(configPathName));

      // if (existsSync(configPathName)) {
      //   console.log("hello");
      // } else {
      //   // ici
      // }
    }
    if (typeof dbConfig === "string") {
      // postgres://user:pass@host:port/db
      // regx
      let [, type, username, password, host, port, database] = dbConfig.match(
        /(.*):\/\/(.*):(.*)@(.*):(.*)\/(.*)/
      );
      this.config = { type, host, port, username, password, database };
      console.log(this.config);
    }
  }
  //
  // const { host, port , username , pass } = this.config
  // switch (type) {
  //   case 'postgres':
  //       this.dbInstance = new PostgresSQL({ host, port , username , pass })
  //     break;
  //   default:
  //
  // }
}
