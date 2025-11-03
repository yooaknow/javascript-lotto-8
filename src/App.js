import GameController from "./controller/GameController.js";

export default class App {
  constructor() {
    this.controller = new GameController();
  }

  async run() {
    await this.controller.run();
  }
}

if (process.argv[1].includes("App.js")) {
  const app = new App();
  app.run();
}
