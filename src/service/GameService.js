import LottoGenerator from "./LottoGenerator.js";
import Statistics from "../domain/Statistics.js";
import WinCondition from "../domain/WinCondition.js";
import Validator from "../util/Validator.js";
import { LOTTO_PRICE } from "../constants/LottoConstants.js";

export default class GameService {
  constructor() {
    this.statistics = new Statistics();
  }

  generateLottos(purchaseAmount) {
    Validator.validatePurchaseAmount(purchaseAmount);
    const count = purchaseAmount / LOTTO_PRICE;
    return Array.from({ length: count }, () => LottoGenerator.generate());
  }

  calculateResults(lottos, winningNumbers, bonusNumber) {
    Validator.validateWinningNumbers(winningNumbers);
    Validator.validateBonusNumber(bonusNumber, winningNumbers);

    const winCondition = new WinCondition(winningNumbers, bonusNumber);

    lottos.forEach((lotto) => {
      const rank = winCondition.rankOf(lotto);
      this.statistics.add(rank);
    });

    return this.statistics;
  }
}
