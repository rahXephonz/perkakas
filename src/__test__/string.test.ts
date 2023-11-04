import {
  camelToSnake,
  isSpecialChar,
  replaceSpecialChar,
  snakeToCamel,
  titleCase,
} from "../string";

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

describe("snakeToCamel function", () => {
  it("should convert snake_case to camelCase", () => {
    expect(snakeToCamel("snake_case")).toBe("snakeCase");
    expect(snakeToCamel("another_example_string")).toBe("anotherExampleString");
    expect(snakeToCamel("yet_another_example")).toBe("yetAnotherExample");
  });

  it("should handle input with no underscores", () => {
    expect(snakeToCamel("nocasechange")).toBe("nocasechange");
  });

  it("should handle empty input", () => {
    expect(snakeToCamel("")).toBe("");
  });
});

describe("camelToSnake function", () => {
  it("should convert camelCase to snake_case", () => {
    expect(camelToSnake("camelCase")).toBe("camel_case");
    expect(camelToSnake("anotherExampleString")).toBe("another_example_string");
    expect(camelToSnake("yetAnotherExample")).toBe("yet_another_example");
  });

  it("should handle input with no uppercase letters", () => {
    expect(camelToSnake("nocasechange")).toBe("nocasechange");
  });

  it("should handle empty input", () => {
    expect(camelToSnake("")).toBe("");
  });
});
