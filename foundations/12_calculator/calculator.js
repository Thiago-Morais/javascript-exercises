const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  let result = 0;
  numbers.forEach((element) => {
    result += element;
  });
  return result;
};

const multiply = function (numbers) {
  let result = 1;
  numbers.forEach((element) => {
    result *= element;
  });
  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a === 0) return 1;
  if (a < 0) return 0;
  return factorial(a - 1) * a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
