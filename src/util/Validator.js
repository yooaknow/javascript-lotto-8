import { LOTTO_NUMBERS_COUNT, NUMBER_RANGE, LOTTO_PRICE, ERROR_MESSAGES } from "../constants/LottoConstants.js";

export default class Validator {
  static validatePurchaseAmount(amount) {
    if (amount % LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
  }

  static validateWinningNumbers(numbers) {
    if (!Array.isArray(numbers) || numbers.length !== LOTTO_NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS);
    }
    this.#validateNumberRange(numbers);
    this.#validateDuplicate(numbers);
  }

  static #validateNumberRange(numbers) {
    numbers.forEach((num) => {
      if (!Number.isInteger(num) || num < NUMBER_RANGE.MIN || num > NUMBER_RANGE.MAX) {
        throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER);
      }
    });
  }

  static #validateDuplicate(numbers) {
    const set = new Set(numbers);
    if (set.size !== LOTTO_NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBER);
    }
  }

  static validateBonusNumber(bonus, winningNumbers) {
    if (!Number.isInteger(bonus) || bonus < NUMBER_RANGE.MIN || bonus > NUMBER_RANGE.MAX) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER);
    }
    if (winningNumbers.includes(bonus)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }
  }
}
