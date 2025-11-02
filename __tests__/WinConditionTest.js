import Lotto from "../src/domain/Lotto.js";
import WinCondition from "../src/domain/WinCondition.js";

describe("WinCondition 클래스", () => {
  const wc = new WinCondition([1,2,3,4,5,6], 7);

  test.each([
    [[1,2,3,4,5,6], "FIRST"],
    [[1,2,3,4,5,7], "SECOND"],
    [[1,2,3,4,5,45], "THIRD"],
    [[1,2,3,4,44,45], "FOURTH"],
    [[1,2,3,43,44,45], "FIFTH"],
    [[1,2,42,43,44,45], null],
  ])("numbers=%p => %p", (nums, rank) => {
    expect(wc.rankOf(new Lotto(nums))).toBe(rank);
  });
});
