// jest test code

const {convertToUpper} = require('./utils');

describe("convertToUpper", () => {
  test("converts lowercase letters to uppercase", () => {
    expect(convertToUpper("hej")).toBe("HEJ");
  });
});