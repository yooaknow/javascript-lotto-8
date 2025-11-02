import { LOTTO_NUMBERS_COUNT, NUMBER_RANGE, ERROR_MESSAGES } from "../constants/LottoConstants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_COUNT);
    }

    const set = new Set(numbers);
    if (set.size !== LOTTO_NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBER);
    }

    numbers.forEach((num) => {
      if (!Number.isInteger(num) || num < NUMBER_RANGE.MIN || num > NUMBER_RANGE.MAX) {
        throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER);
      }
    });
  }
}

export default Lotto;
