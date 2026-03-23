const palindromes = function (input) {
  const squashed = removePontuation(input).toLowerCase();
  const middleOfString = squashed.length / 2 - 1;
  for (let i = 0; i < middleOfString; i++) {
    const oppositeLetter = squashed.at(-i - 1);
    if (squashed[i] != oppositeLetter) {
      return false;
    }
  }
  return true;
};
function removePontuation(text) {
  return text.replace(/[^a-z0-9]/gi, "");
}

console.log(palindromes("Racecar"));
// Do not edit below this line
module.exports = palindromes;
