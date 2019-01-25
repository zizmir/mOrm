import { Client } from "pg";
import Core from "./core";

export default class PostgreSQL extends Core {
  constructor(option) {
    this.option = option;
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
      await this.client.connect();
    } catch (er) {
      throw new Error(`Database ${host} doesn't exist`);
    }
  }
}
