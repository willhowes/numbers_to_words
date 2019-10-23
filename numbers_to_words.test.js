const numbersToWords = require("./numbers_to_words");

describe("#numbersToWords", () => {
  it("Returns 'one' given an input of (1, 1)", () => {
    expect(numbersToWords(1, 1)).toEqual("One");
  });

  it("Returns 'one,two' given and input of (1,2)", () => {
    expect(numbersToWords(1, 2)).toEqual("One\nTwo");
  });

  it("Returns all numbers up to nine correctly", () => {
    expect(numbersToWords(1, 9)).toEqual(
      "One\nTwo\nThree\nFour\nFive\nSix\nSeven\nEight\nNine"
    );
  });

  it("Returns all the teens correctly", () => {
    expect(numbersToWords(11, 19)).toEqual(
      "Eleven\nTwelve\nThirteen\nFourteen\nFifteen\nSixteen\nSeventeen\nEighteen\nNineteen"
    );
  });

  it("Correctly handles divisables of ten", () => {
    expect(numbersToWords(10, 10)).toEqual("Ten");
    expect(numbersToWords(60, 60)).toEqual("Sixty");
  });

  it("Correctly handles numbers above twenty but below 100", () => {
    expect(numbersToWords(21, 21)).toEqual("Twenty-One");
    expect(numbersToWords(49, 49)).toEqual("Forty-Nine");
  });

  it("Correctly handles a number above 100", () => {
    expect(numbersToWords(121, 121)).toEqual("One hundred and twenty-one");
  });

  it("Correctly handles a divisble of ten between 100 and 900", () => {
    expect(numbersToWords(250, 250)).toEqual("Two hundred and fifty");
    expect(numbersToWords(790, 790)).toEqual("Seven hundred and ninety");
  });
});
