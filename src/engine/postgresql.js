import { Client } from "pg";
import Core from "./core";

export default class PostgreSQL extends Core {
  constructor(option) {
    super(option);
  }

  async initialize() {
    const { host, port, username, password, database } = this;

    this.client = new Client({
      user: username,
      host,
      database,
      password,
      port
    });

    try {
      await this.client.connect(err => {
        if (err) {
          console.error("connection error", err.stack);
        } else {
          console.log("connected");
          super.dump();
        }
      });
    } catch (er) {
      throw new Error(`Database ${host} doesn't exist`);
    }
  }
}
