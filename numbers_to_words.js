const ones = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine"
};

const teens = {
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen"
};

const tens = {
  1: "ten",
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety"
};

const numbersToWords = (startNumber, endNumber) => {
  let i;
  convertedNumbers = [];
  for (i = startNumber; i <= endNumber; i++) {
    let numberAsWord = [];
    let noRemaining = i;
    numberAsWord.push(handleThousands(i));
    noRemaining = i % 1000;
    numberAsWord.push(handleHundreds(noRemaining));
    noRemaining = i % 100;
    numberAsWord.push(handleTens(noRemaining));
    if (numberAsWord.length > 0) {
      if (
        numberAsWord[numberAsWord.length - 1] === undefined ||
        (!numberAsWord[numberAsWord.length - 1].includes("-") &&
          !Object.values(teens).includes(numberAsWord[numberAsWord.length - 1]))
      ) {
        noRemaining = i % 10;
        numberAsWord.push(handleOnes(noRemaining));
      }
    }

    numberAsWord = numberAsWord.filter(numberWord => {
      return numberWord != undefined;
    });

    if (
      numberAsWord.length > 1 &&
      !numberAsWord[numberAsWord.length - 2].includes("thousand")
    ) {
      numberAsWord.splice(numberAsWord.length - 1, 0, "and");
    }

    if (
      numberAsWord.length === 2 &&
      numberAsWord[0].includes("thousand" || "hundred") &&
      !numberAsWord[numberAsWord.length - 1].includes("hundred")
    ) {
      numberAsWord.splice(numberAsWord.length - 1, 0, "and");
    }

    if (
      numberAsWord.length > 1 &&
      numberAsWord[0].includes("thousand") &&
      numberAsWord[1].includes("hundred")
    ) {
      numberAsWord[0] += ",";
    }
    numberAsWord = capitalizeFirstLetter(numberAsWord.join(" "));
    convertedNumbers.push(numberAsWord);
  }

  return convertedNumbers.join("\n");
};

const convertToWord = number => {
  if (number < 10) {
    return ones[number];
  } else if (number > 10 && number < 20) {
    return teens[number];
  } else if ((number > 19 && number < 100) || number == 10) {
    if (remainderAfterTens(number) === 0) {
      return tens[noOfTens(number)];
    } else {
      return `${tens[noOfTens(number)]}-${ones[remainderAfterTens(number)]}`;
    }
  }
};

const handleThousands = number => {
  if (noOfThousands(number) === 0) {
    return;
  } else {
    return `${convertToWord(noOfThousands(number))} thousand`;
  }
};

const handleHundreds = number => {
  if (noOfHundreds(number) === 0) {
    return;
  } else {
    return `${convertToWord(noOfHundreds(number))} hundred`;
  }
};

const handleTens = number => {
  if (noOfTens(number) === 0) {
    return;
  } else {
    return `${convertToWord(number)}`;
  }
};

const handleOnes = number => {
  if (number === 0) {
    return;
  } else {
    return `${ones[number]}`;
  }
};

const noOfThousands = number => {
  return Math.floor(number / 1000);
};

const noOfHundreds = number => {
  let totalHundreds = Math.floor(number / 100);
  if (totalHundreds == 10) {
    return 10;
  } else {
    return totalHundreds % 10;
  }
};

const noOfTens = number => {
  let totalTens = Math.floor(number / 10);
  if (totalTens == 10) {
    return 10;
  } else {
    return totalTens % 10;
  }
};

const remainderAfterTens = number => {
  return number % 10;
};

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = numbersToWords;
