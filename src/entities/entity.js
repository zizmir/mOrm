import pg from "pg";

export default class Entity {
  constructor(dbInstance, name) {
    (this.dbInstance = dbInstance), (this.name = name);
  }
  async save(data) {}
}
