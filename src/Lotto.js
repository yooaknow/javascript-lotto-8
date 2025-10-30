class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    
  numbers.forEach((num)=> {
    if (!Number.isInteger(num) || num <1 || num > 45) {
      throw new Error ("[ERROR] 로또 번호는 1부터 45 사이의 숫자입니다.")
    }
  });
  }



  // TODO: 추가 기능 구현
}

export default Lotto;
