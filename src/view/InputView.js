import { Console } from "@woowacourse/mission-utils";
import Validator from "../util/Validator.js";

export default class InputView {
  static async readPurchaseAmount() {
    Console.print("구입금액을 입력해 주세요.");
    const input = await Console.readLineAsync();
    const amount = Number(input);
    try {
      Validator.validatePurchaseAmount(amount);
      return amount;
    } catch (error) {
      Console.print(error.message);
      return this.readPurchaseAmount(); // 
    }
  }

  static async readWinningNumbers() {
    Console.print("당첨 번호를 입력해 주세요.");
    const input = await Console.readLineAsync();
    const numbers = input.split(",").map((num) => Number(num));
    try {
      Validator.validateWinningNumbers(numbers);
      return numbers;
    } catch (error) {
      Console.print(error.message);
      return this.readWinningNumbers();
    }
  }

  static async readBonusNumber(winningNumbers) {
    Console.print("보너스 번호를 입력해 주세요.");
    const input = await Console.readLineAsync();
    const bonus = Number(input);
    try {
      Validator.validateBonusNumber(bonus, winningNumbers);
      return bonus;
    } catch (error) {
      Console.print(error.message);
      return this.readBonusNumber(winningNumbers);
    }
  }
}
