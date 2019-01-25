import { isEmpty } from "lodash";
import { existsSync } from "fs";
import Core from "./engine/core";
import PostgreSQL from "./engine/postgresql";

export default class mOrm {
  constructor() {
    this.config = {};
    this.configPathName = "./mOrm.config.js";
    this.dbInstance = {};
  }
  // { host, port , username , pass }
  // postgres
  async createConnection(dbConfig = {}) {
    // check
    if (isEmpty(dbConfig)) {
      console.log(this.configPathName);
      console.log("plop", await existsSync(this.configPathName));
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

    const { host, port, username, pass, database } = this.config;
    switch (this.config.type) {
      case "postgres":
        this.dbInstance = new PostgreSQL({
          host,
          port,
          username,
          pass,
          database
        });
        break;
    }
    await this.dbInstance.initialize();
  }
}
