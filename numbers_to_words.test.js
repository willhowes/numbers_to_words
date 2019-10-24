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
    expect(numbersToWords(21, 21)).toEqual("Twenty-one");
    expect(numbersToWords(49, 49)).toEqual("Forty-nine");
  });

  it("Correctly handles a number above 100", () => {
    expect(numbersToWords(121, 121)).toEqual("One hundred and twenty-one");
  });

  it("Correctly handles a divisble of ten between 100 and 900", () => {
    expect(numbersToWords(250, 250)).toEqual("Two hundred and fifty");
    expect(numbersToWords(790, 790)).toEqual("Seven hundred and ninety");
  });

  it("Correctly handles a number above 100 with a teen number involved", () => {
    expect(numbersToWords(513, 513)).toEqual("Five hundred and thirteen");
  });

  it("Correctly handles numbers divisible by 100", () => {
    expect(numbersToWords(300, 300)).toEqual("Three hundred");
  });

  it("Correctly handles numbers divisble by 1000 up to 9000", () => {
    expect(numbersToWords(2000, 2000)).toEqual("Two thousand");
  });

  it("Correctly handles number above 1000 divisble by 100", () => {
    expect(numbersToWords(3500, 3500)).toEqual("Three thousand, five hundred");
  });

  it("Correctly handles numbers above 1000 with teen numbers", () => {
    expect(numbersToWords(4111, 4111)).toEqual(
      "Four thousand, one hundred and eleven"
    );
  });

  it("Correct handles numbers above 1000", () => {
    expect(numbersToWords(3456, 3456)).toEqual(
      "Three thousand, four hundred and fifty-six"
    );
  });

  it("Correctly handles numbers above 9999 up to 99999", () => {
    expect(numbersToWords(10000, 10000)).toEqual("Ten thousand");
    expect(numbersToWords(50001, 50001)).toEqual("Fifty thousand and one");
    expect(numbersToWords(42222, 42222)).toEqual(
      "Forty-two thousand, two hundred and twenty-two"
    );
    expect(numbersToWords(50013, 50013)).toEqual("Fifty thousand and thirteen");
    expect(numbersToWords(75550, 75550)).toEqual(
      "Seventy-five thousand, five hundred and fifty"
    );
    expect(numbersToWords(99999, 99999)).toEqual(
      "Ninety-nine thousand, nine hundred and ninety-nine"
    );
    expect(numbersToWords(30111, 30111)).toEqual(
      "Thirty thousand, one hundred and eleven"
    );
  });
});
