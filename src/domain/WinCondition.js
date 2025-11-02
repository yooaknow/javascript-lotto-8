export const PRIZE = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

export default class WinCondition {
  constructor(winningNumbers, bonus) {
    this.winSet = new Set(winningNumbers);
    this.bonus = bonus;
  }

  rankOf(lotto) {
    const matchCount = lotto.numbers.filter((n) => this.winSet.has(n)).length;
    const hasBonus = lotto.numbers.includes(this.bonus);

    if (matchCount === 6) return "FIRST";
    if (matchCount === 5 && hasBonus) return "SECOND";
    if (matchCount === 5) return "THIRD";
    if (matchCount === 4) return "FOURTH";
    if (matchCount === 3) return "FIFTH";
    return null;
  }
}
