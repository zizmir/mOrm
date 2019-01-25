export function mDump(obj, andDie = false) {
  import { dump, dd } from "../engine/core";
  if (typeof obj === "function") {
    obj = {
      type: "function",
      name: obj.name
    };
  }

  dump(obj);
}
