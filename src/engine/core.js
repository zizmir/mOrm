export default class Core {
  constructor({ host, port, username, password, database }) {}
  dump(is_uri = false) {
    console.log(this);
  }
}
