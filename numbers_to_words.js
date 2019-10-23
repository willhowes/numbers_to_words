const ones = {
  1: "One",
  2: "Two"
};

const numbersToWords = (startNumber, endNumber) => {
  let i;
  convertedNumbers = [];
  for (i = startNumber; i <= endNumber; i++) {
    convertedNumbers.push(ones[i]);
  }
  return convertedNumbers.join("\n");
};

module.exports = numbersToWords;
