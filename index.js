class SimpleCalculator {
  constructor(value) {
    this.value = value;
    this.sum = 0;
  }

  divide(value) {
    this.value = this.value / value;
    return this;
  }

  add(value1, value2) {
    this.sum = value1 + value2;
    return this;
  }

  multiply() {
    this.value = this.value * this.sum;
    return this;
  }

}

calc = new SimpleCalculator(8)
calc.divide(2) 
  .add(2,2)
  .multiply()
  .value
