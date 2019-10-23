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

const teens = {
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen"
};

const numbersToWords = (startNumber, endNumber) => {
  let i;
  convertedNumbers = [];
  for (i = startNumber; i <= endNumber; i++) {
    if (i < 10) {
      convertedNumbers.push(ones[i]);
    } else if (i > 10 && i < 20) {
      convertedNumbers.push(teens[i]);
    }
  }
  return convertedNumbers.join("\n");
};

module.exports = numbersToWords;
