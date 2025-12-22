const removeFromArray = function (inputArray, ...toRemove) {
  toRemove.forEach((element) => {
    let indexToRemove = inputArray.indexOf(element);
    while (indexToRemove != -1) {
      inputArray.splice(indexToRemove, 1);
      indexToRemove = inputArray.indexOf(element);
    }
  });
  return inputArray;
};

let result = removeFromArray([1, 2, 2, 4], 2);
console.log(`result = ${result}`);
// Do not edit below this line
module.exports = removeFromArray;
