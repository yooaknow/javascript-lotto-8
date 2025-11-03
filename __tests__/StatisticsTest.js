import Statistics from "../src/domain/Statistics.js";
import { PRIZE } from "../src/constants/LottoConstants.js";

describe("Statistics 클래스", () => {
  let stats;

  beforeEach(() => {
    stats = new Statistics();
  });

  test("등수별 누적 추가", () => {
    stats.add("FIRST");
    stats.add("THIRD");
    stats.add("THIRD");
    expect(stats.counts.FIRST).toBe(1);
    expect(stats.counts.THIRD).toBe(2);
    expect(stats.counts.SECOND).toBe(0);
  });

  test("총 상금 계산", () => {
    stats.add("FIRST");
    stats.add("FIFTH");
    expect(stats.totalPrize()).toBe(PRIZE.FIRST + PRIZE.FIFTH);
  });

  test("수익률 계산", () => {
    stats.add("FIRST");   
    stats.add("FIFTH");  
    expect(stats.yieldRate(8000)).toBeCloseTo((PRIZE.FIRST + PRIZE.FIFTH)/8000*100, 1);
  });

  test("null 등수는 무시", () => {
    stats.add(null);
    expect(stats.totalPrize()).toBe(0);
  });
});
