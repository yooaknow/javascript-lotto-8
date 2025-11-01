import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGenerator {
  static generate(pick = Random.pickUniqueNumbersInRange) {
    const numbers = pick(1, 45, 6);
    return new Lotto(numbers);
  }
}

export default LottoGenerator;
