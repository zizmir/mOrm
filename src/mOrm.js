import { isEmpty } from "lodash";
export default class mOrm {
  constructor() {
    this.config = {};
  }
  configPathName = "./mOrm.config.js";
  // { host, port , username , pass }
  // postgres
  async createConnection(dbConfig = {}) {
    // regex
    // check
    if (isEmpty(dbConfig)) {
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
