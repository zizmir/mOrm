import { dump } from "../engine/core";

export function mDump(obj, andDie = false) {
  if (obj) {
    obj = {
      host: obj.host,
      port: obj.port,
      username: obj.username,
      password: obj.password,
      database: obj.database
    };
  }

  dump(obj);
}
