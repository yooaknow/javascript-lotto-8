import { PRIZE } from "../constants/LottoConstants.js";

export default class Statistics {
  constructor() {
    this.counts = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
    };
  }

  add(rank) {
    if (rank && PRIZE[rank] !== undefined) {
      this.counts[rank]++;
    }
  }

  totalPrize() {
    return Object.entries(this.counts).reduce(
      (sum, [rank, count]) => sum + PRIZE[rank] * count,
      0
    );
  }

  yieldRate(purchase) {
    const rate = (this.totalPrize() / purchase) * 100;
    return Math.round(rate * 10) / 10;
  }
}
