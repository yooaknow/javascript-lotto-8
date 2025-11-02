import { MATCH_COUNT } from "../constants/LottoConstants.js";

class WinCondition {
  constructor(winningNumbers, bonus) {
    this.winSet = new Set(winningNumbers);
    this.bonus = bonus;
  }

  rankOf(lotto) {
    const matchCount = lotto.numbers.filter((n) => this.winSet.has(n)).length;
    const hasBonus = lotto.numbers.includes(this.bonus);

    if (matchCount === MATCH_COUNT.FIRST) return "FIRST";
    if (matchCount === MATCH_COUNT.SECOND && hasBonus) return "SECOND";
    if (matchCount === MATCH_COUNT.THIRD) return "THIRD";
    if (matchCount === MATCH_COUNT.FOURTH) return "FOURTH";
    if (matchCount === MATCH_COUNT.FIFTH) return "FIFTH";
    return null;
  }
}

export default WinCondition;
