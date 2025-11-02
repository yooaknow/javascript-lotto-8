export default class Validator {
  static validatePurchaseAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }
  }

  static validateWinningNumbers(numbers) {
    if (!Array.isArray(numbers) || numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
  }

  static validateBonusNumber(bonus, winningNumbers) {
    if (winningNumbers.includes(bonus)) {
      throw new Error("[ERROR] 보너스 번호가 당첨 번호와 중복될 수 없습니다.");
    }
  }
}
