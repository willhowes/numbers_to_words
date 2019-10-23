const ones = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine"
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
