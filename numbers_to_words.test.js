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

  it("Correctly handles numbers above twenty but below 100", () => {
    expect(numbersToWords(21, 21)).toEqual("Twenty-One");
  });
});
