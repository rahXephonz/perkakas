import {
  getDateWithSortYearFormat,
  getEnGbDateFormat,
  getEstDateFormat,
  getUSADateFormat,
  getUSADateWithLongMonthFormat,
  getUSASortDateFormat,
} from "../date";

describe("getUSAFormatDate", () => {
  it("should get date string to USA date format", () => {
    const date = "2023-06-09";

    const result = getUSADateFormat(date);

    expect(result).toBe("Jun 09, 2023");
  });

  it('should return "-" for invalid date string', () => {
    const invalidDate = "invalid";

    const result = getUSADateFormat(invalidDate);

    expect(result).toBe("-");
  });
});

describe("getUSADateWithLongMonthFormat", () => {
  it("should format a valid date correctly", () => {
    const inputDate = "2023-08-25";
    const expectedOutput = "August 25, 2023";

    const result = getUSADateWithLongMonthFormat(inputDate);

    expect(result).toBe(expectedOutput);
  });

  it("should handle an invalid date", () => {
    const invalidDate = "invalid-date";
    const expectedOutput = "-";

    const result = getUSADateWithLongMonthFormat(invalidDate);

    expect(result).toBe(expectedOutput);
  });
});

describe("getEstDateFormat", () => {
  it("should get date string to EST date format", () => {
    const dateString = "2023-06-09T12:34:56";

    const result = getEstDateFormat(dateString);

    expect(result).toStrictEqual("Jun 09, 2023, 12:34 PM EST");
  });
});

describe("getDateWithShortYearFormat", () => {
  it("should get date string to date format with shortened year", () => {
    const dateString = "2023-06-09";

    const result = getDateWithSortYearFormat(dateString);

    expect(result).toBe("Jun 09, 23");
  });
});

describe("getUSASortDateFormat", () => {
  it("should get date string to USA date format with 2-digit month and day", () => {
    const dateString = "2023-06-09";

    const result = getUSASortDateFormat(dateString);

    expect(result).toBe("06/09/23");
  });
});

describe("getEnGBDateFormat", () => {
  it("should get date string to en-GB date format", () => {
    const date = "2023-06-09";

    const result = getEnGbDateFormat(date);

    expect(result).toBe("09 June 2023");
  });
});
