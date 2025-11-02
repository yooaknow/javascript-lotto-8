import Lotto from "../src/domain/Lotto.js";
import LottoGenerator from "../src/service/LottoGenerator.js";

describe("LottoGenerator", () => {
  test("의존성 주입된 랜덤 함수로 로또를 생성한다.", () => {
    const fakePick = () => [6, 1, 45, 10, 2, 3];
    const lotto = LottoGenerator.generate(fakePick);
    expect(lotto).toBeInstanceOf(Lotto);
  });

  test("의존성 주입된 pick이 올바른 파라미터(1, 45, 6)로 호출된다.", () => {
    const fakePick = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6]);
    LottoGenerator.generate(fakePick);
    expect(fakePick).toHaveBeenCalledWith(1, 45, 6);
  });
});
