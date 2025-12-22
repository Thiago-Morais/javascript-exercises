const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return "ERROR";
  }

  const min = a < b ? a : b;
  const max = a < b ? b : a;
  const diff = max - min;
  let total = min;

  for (let i = 0; i < diff; i++) {
    total += min + i + 1;
  }

  return total;
};

const result = sumAll(-10, 4);
console.log(`result = ${result}`);
// Do not edit below this line
module.exports = sumAll;
