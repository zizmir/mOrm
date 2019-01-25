export default class Note {
  static meta() {
    return {
      name: "Note",
      columns: {
        note: {
          primary: true,
          type: "int"
        }
      }
    };
  }
}
