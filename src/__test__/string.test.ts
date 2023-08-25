import { isSpecialChar, replaceSpecialChar, titleCase } from "../string";

describe("titleCase function", () => {
  it("should convert a string to title case", () => {
    const input = "this_is_a_test_string";
    const expectedOutput = "This Is A Test String";

    expect(titleCase(input)).toBe(expectedOutput);
  });

  it("should handle a string with initial special characters", () => {
    const input = "@test_string_with_special_chars";
    const expectedOutput = " Test String With Special Chars";

    expect(titleCase(input)).toBe(expectedOutput);
  });
});

describe("replaceSpecialChar function", () => {
  it("should replace special characters with the specified character", () => {
    const input = "this_is_a_test_string";
    const char = "-";
    const expectedOutput = "this-is-a-test-string";

    expect(replaceSpecialChar(input, char)).toBe(expectedOutput);
  });
});

describe("isSpecialChar function", () => {
  it("should return true for special characters", () => {
    const specialChars = ["!", "@", "#", " "];

    specialChars.forEach(char => {
      expect(isSpecialChar(char)).toBe(true);
    });
  });

  it("should return false for alphanumeric characters", () => {
    const alphanumericChars = ["a", "A", "0", "9"];

    alphanumericChars.forEach(char => {
      expect(isSpecialChar(char)).toBe(false);
    });
  });
});
