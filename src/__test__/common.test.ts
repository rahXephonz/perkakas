import { compose, countryCode } from "../common";

const addTwo = (x: number) => x + 2;
const multiplyByThree = (x: number) => x * 3;
const subtractFive = (x: number) => x - 5;

// Test suite for the compose function
describe("compose function", () => {
  // Test case 1: Compose with two functions
  it("should correctly compose two functions", () => {
    const composed = compose(multiplyByThree, addTwo);
    const result = composed(5); // Input value is 5

    expect(result).toBe(17); // (5 * 3) + 2 = 15 + 2 = 17
  });

  // Test case 2: Compose with three functions
  it("should correctly compose three functions", () => {
    const composed = compose(multiplyByThree, subtractFive, addTwo);
    const result = composed(10); // Input value is 10

    expect(result).toBe(27); // ((10 * 3) - 5) + 2 = (30 - 5) + 2 = 25 + 2 = 27
  });

  // Test case 3: Compose with a single function
  it("should return the same value when composed with a single function", () => {
    const identity = (x: number) => x; // Identity function
    const composed = compose(identity);
    const result = composed(42); // Input value is 42

    expect(result).toBe(42); // Should return the input value unchanged
  });

  // Test case 4: Compose with no functions
  it("should return the input value when composed with no functions", () => {
    const composed = compose(); // No functions
    const result = composed(99); // Input value is 99

    expect(result).toBe(99); // Should return the input value unchanged
  });

  it("should return combined string", () => {
    const identityOne = (x: string) => x;
    const composed = compose(identityOne, identityOne);
    const result = composed("Hello");

    expect(result).toBe("Hello");
  });
});

describe("Flag List Country Code", () => {
  // Test case 1: Check if countryCode is an array
  test("countryCode is an array", () => {
    expect(Array.isArray(countryCode)).toBe(true);
  });

  // Test case 2: Check the structure of each object in the array
  test("Each object in countryCode has the expected structure", () => {
    countryCode.forEach(country => {
      expect(country).toHaveProperty("code");
      expect(country).toHaveProperty("name");
      expect(country).toHaveProperty("dial_code");
    });
  });

  // Test case 3: Check the number of objects in countryCode
  test("countryCode contains the expected number of objects", () => {
    // Assuming you have 6 objects in countryCode
    expect(countryCode.length).toBe(248);
  });

  // Test case 4: Check the data inside countryCode
  test("countryCode contains specific country data", () => {
    // Replace these with actual values from your array
    const expectedCountryData = [
      { code: "AD", name: "Andorra", dial_code: "376" },
      { code: "AE", name: "United Arab Emirates", dial_code: "971" },
      // Add more as needed
    ];

    expect(countryCode).toEqual(expect.arrayContaining(expectedCountryData));
  });
});
