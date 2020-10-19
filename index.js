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
calc.divide(2)   // => { value: 10 }
  .add(2,2)   // => { value: 7 }
  .multiply()        // => { value: 11 }
  .value         // => 11

// Console Output
// 11
