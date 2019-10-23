const numbersToWords = require("./numbers_to_words");

describe("#numbersToWords", () => {
  it("Returns 'one' given an input of (1, 1)", () => {
    expect(numbersToWords(1, 1)).toEqual("One");
  });

  it("Returns 'one,two' given and input of (1,2)", () => {
    expect(numbersToWords(1, 2)).toEqual("One\nTwo");
  });
});
