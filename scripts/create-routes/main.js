const WriteController = require("./controller/writeController");

class Main {
  constructor() {
    this.writeController = new WriteController()
    this.init();
  }

  init() {
    this.writeController.exec();
  }
}

new Main();
