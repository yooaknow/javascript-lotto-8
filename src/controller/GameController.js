import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import GameService from "../service/GameService.js";

export default class GameController {
  constructor({ service = new GameService(), inputView = InputView, outputView = OutputView } = {}) {
    this.service = service;
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async run() {
    const purchaseAmount = await this.inputView.readPurchaseAmount();

    const lottos = this.service.generateLottos(purchaseAmount);
    this.outputView.printLottos(lottos);

    const winningNumbers = await this.inputView.readWinningNumbers();
    const bonusNumber = await this.inputView.readBonusNumber(winningNumbers);

    const statistics = this.service.calculateResults(lottos, winningNumbers, bonusNumber);

    this.outputView.printStatistics(statistics, purchaseAmount);
  }
}


