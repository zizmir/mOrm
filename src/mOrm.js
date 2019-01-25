import { isEmpty } from "lodash";
import { existsSync } from "fs";
import { Core } from "./engine/core";
import { PostgreSQL } from "./engine/postgresql";
export default class mOrm {
  constructor() {
    this.config = {};
    this.configPathName = "./mOrm.config.js";
    this.dbInstance = {};
    console.log("toto");
  }
  // { host, port , username , pass }
  // postgres
  async createConnection(dbConfig = {}) {
    // check
    if (isEmpty(dbConfig)) {
      console.log(this.configPathName);
      console.log("plop", await existsSync(this.configPathName));

      // if (existsSync(configPathName)) {
      //   console.log("hello");
      // } else {
      //   // ici
      // }
    }
    if (typeof dbConfig === "string") {
      // regx
      let [, type, username, password, host, port, database] = dbConfig.match(
        /(.*):\/\/(.*):(.*)@(.*):(.*)\/(.*)/
      );
      this.config = { type, host, port, username, password, database };
    } else {
      this.config = dbConfig;
    }
    const { host, port, username, pass, type } = this.config;
    switch (type) {
      case "postgres":
        console.log("this is postgres");
        //       this.dbInstance = new PostgresSQL({ host, port , username , pass })
        break;
      default:
    }
    const { type, host, port, username, pass } = this.config;
    switch (this.config.type) {
      case "postgres":
        this.dbInstance = new PostgreSQL({ host, port, username, pass });
        break;
    }
    await this.dbInstance.initialize();
  }
}
