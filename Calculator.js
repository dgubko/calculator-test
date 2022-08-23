class Calculator {
  constructor() {
    this.numbers = [];
    this.operations = [];
    this.prevResult = 0;
  }
  plus(num) {
    return this.prevResult + num;
  }
  minus(num) {
    return this.prevResult - num;
  }
  multiplication(num) {
    return this.prevResult * num;
  }
  devision(num) {
    return this.prevResult / num;
  }
  addOperation(oper) {
    this.operations.push(oper);
  }
  addNumber(num) {
    this.numbers.push(num);
  }
  replaceOper(oper) {
    this.operations[this.operations.length - 1] = oper;
  }
  clean() {
    this.operations = [];
    this.numbers = [];
    this.prevResult = 0;
  }
}
