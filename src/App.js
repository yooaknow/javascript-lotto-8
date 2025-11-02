import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";
import GameService from "./service/GameService.js";

export default class App {
  constructor() {
    this.service = new GameService();
  }

  async run() {
    const purchaseAmount = await InputView.readPurchaseAmount();

    const lottos = this.service.generateLottos(purchaseAmount);
    OutputView.printLottos(lottos);

    const winningNumbers = await InputView.readWinningNumbers();
    const bonusNumber = await InputView.readBonusNumber(winningNumbers);

    const statistics = this.service.tallyResults(lottos, winningNumbers, bonusNumber);

    OutputView.printStatistics(statistics, purchaseAmount);
  }
}

if (process.argv[1].includes("App.js")) {
  const app = new App();
  app.run();
}
