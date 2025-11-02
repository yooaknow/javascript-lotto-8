import { Random } from "@woowacourse/mission-utils";
import Lotto from "../domain/Lotto.js";
import { NUMBER_RANGE, LOTTO_NUMBERS_COUNT } from "../constants/LottoConstants.js";

class LottoGenerator {
  static generate(pick = Random.pickUniqueNumbersInRange) {
    const numbers = pick(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX, LOTTO_NUMBERS_COUNT);
    return new Lotto(numbers);
  }
}

export default LottoGenerator;
