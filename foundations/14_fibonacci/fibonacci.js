const fibonacci = function (targetIndex) {
  if (targetIndex < 0) {
    return "OOPS";
  }
  if (targetIndex == 0) {
    return 0;
  }
  if (targetIndex == 1) {
    return 1;
  }

  let beforePrevious = 0;
  let previous = 1;
  let result;
  for (let i = 2; i <= targetIndex; i++) {
    result = beforePrevious + previous;
    beforePrevious = previous;
    previous = result;
  }
  return result;
};

console.log(fibonacci(1));
// Do not edit below this line
module.exports = fibonacci;
