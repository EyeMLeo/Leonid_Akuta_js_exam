/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  constructor(a, b) {
    this.sum = this.sum(a, b);
    this.subtraction = this.subtraction(a, b);
    this.multiplication = this.multiplication(a, b);
    this.division = this.division(a, b);
  }
  sum(a, b) {
    return +a + b;
  }
  subtraction(a, b) {
    return a - b;
  }
  multiplication(a, b) {
    return a - b;
  }
  division(a, b) {
    return a / b;
  }
}

let resultCalculate = new Calculator(16, 4);
console.log("resultCalculate ===", resultCalculate);
