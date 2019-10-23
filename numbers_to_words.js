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

const tens = {
  1: "Ten",
  2: "Twenty",
  3: "Thirty",
  4: "Forty",
  5: "Fifty",
  6: "Sixty",
  7: "Seventy",
  8: "Eighty",
  9: "Ninety"
};

const numbersToWords = (startNumber, endNumber) => {
  let i;
  convertedNumbers = [];
  for (i = startNumber; i <= endNumber; i++) {
    if (i < 10) {
      convertedNumbers.push(ones[i]);
    } else if (i > 10 && i < 20) {
      convertedNumbers.push(teens[i]);
    } else if ((i > 19 && i < 100) || i == 10) {
      let noOfTens = Math.floor(i / 10);
      let remainder = i - noOfTens * 10;
      if (remainder === 0) {
        convertedNumbers.push(`${tens[noOfTens]}`);
      } else {
        convertedNumbers.push(`${tens[noOfTens]}-${ones[remainder]}`);
      }
    } else if (i > 99 && i < 999) {
      let noOfHundreds = Math.floor(i / 100);
      let remainder = i - noOfHundreds * 100;
      let noOfTens = Math.floor(remainder / 10);
      let remainderAfterTens = remainder - noOfTens * 10;
      if (remainder === 0) {
      } else {
        convertedNumbers.push(
          `${ones[noOfHundreds]} hundred and ${tens[
            noOfTens
          ].toLowerCase()}-${ones[remainderAfterTens].toLowerCase()}`
        );
      }
    }
  }
  return convertedNumbers.join("\n");
};

module.exports = numbersToWords;
