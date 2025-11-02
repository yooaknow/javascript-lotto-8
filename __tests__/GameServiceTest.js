import GameService from "../src/service/GameService.js";
import Lotto from "../src/domain/Lotto.js";

describe("GameService 클래스", () => {
  let service;

  beforeEach(() => {
    service = new GameService();
  });

  test("구입 금액에 따라 N장 로또 생성", () => {
    const lottos = service.generateLottos(3000); // 3장
    expect(lottos).toHaveLength(3);
    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
      expect(lotto.numbers.length).toBe(6);
    });
  });

  test("당첨 결과 집계", () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const stats = service.tallyResults(lottos, winningNumbers, bonusNumber);

    expect(stats.counts.FIRST).toBe(1);
    expect(stats.counts.FIFTH).toBe(0);
  });

  test("Statistics 총 상금 및 수익률 계산", () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const stats = service.tallyResults(lottos, winningNumbers, bonusNumber);

    expect(stats.counts.FIRST).toBe(1);
    expect(stats.counts.SECOND).toBe(1);

    const total = stats.totalPrize();
    expect(total).toBe(2000000000 + 30000000);

    const yieldRate = stats.yieldRate(2000); // 2장 * 1000원
    expect(yieldRate).toBeCloseTo((2000000000 + 30000000) / 2000 * 100, 1);
  });
});
