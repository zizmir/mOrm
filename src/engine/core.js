export default class Core {
  constructor({ host, port, username, password, database }) {
    this.obj = { host, port, username, password, database };
  }
  dump() {
    console.log(this.obj);
  }
}
