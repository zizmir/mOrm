export default class Project {
  static meta() {
    return {
      name: "Project",
      columns: {
        name: {
          primary: true,
          type: "string"
        }
      }
    };
  }
}
