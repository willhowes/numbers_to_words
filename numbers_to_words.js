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
      if (remainderAfterTens(i) === 0) {
        convertedNumbers.push(`${tens[noOfTens(i)]}`);
      } else {
        convertedNumbers.push(
          `${tens[noOfTens(i)]}-${ones[remainderAfterTens(i)]}`
        );
      }
    } else if (i > 99 && i < 999) {
      if (remainderAfterHundreds(i) === 0) {
        convertedNumbers.push(`${ones[noOfHundreds(i)]} hundred`);
      } else if (remainderAfterTens(i) === 0) {
        convertedNumbers.push(
          `${ones[noOfHundreds(i)]} hundred and ${tens[
            noOfTens(i)
          ].toLowerCase()}`
        );
      } else if (
        i - noOfHundreds(i) * 100 < 20 &&
        i - noOfHundreds(i) * 100 > 10
      ) {
        convertedNumbers.push(
          `${ones[noOfHundreds(i)]} hundred and ${teens[
            remainderAfterHundreds(i)
          ].toLowerCase()}`
        );
      } else {
        convertedNumbers.push(
          `${ones[noOfHundreds(i)]} hundred and ${tens[
            noOfTens(i)
          ].toLowerCase()}-${ones[remainderAfterTens(i)].toLowerCase()}`
        );
      }
    } else {
      if (remainderAfterThousands(i) === 0) {
        convertedNumbers.push(`${ones[noOfThousands(i)]} thousand`);
      }
    }
  }
  return convertedNumbers.join("\n");
};

const noOfThousands = number => {
  return Math.floor(number / 1000);
};

const noOfHundreds = number => {
  return Math.floor(number / 100);
};

const noOfTens = number => {
  let totalTens = Math.floor(number / 10);
  if (totalTens == 10) {
    return 10;
  } else {
    return totalTens % 10;
  }
};

const remainderAfterThousands = number => {
  return number % 1000;
};
const remainderAfterHundreds = number => {
  return number % 100;
};

const remainderAfterTens = number => {
  return number % 10;
};

module.exports = numbersToWords;
