const leapYears = function (year) {
  const by4 = year % 4 === 0;
  const notBy100 = year % 100 != 0;
  const by400 = year % 400 === 0;
  return (by4 && notBy100) || by400;
};

// divisible 100   400   result
// -         true  true  true
// -         true  false false
// -         false true  true
// -         false false false
console.log(leapYears(34992));
// Do not edit below this line
module.exports = leapYears;
