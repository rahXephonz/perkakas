import {
  countableNumber,
  formatK,
  formatPriceDigit,
  formatRupiah,
} from "../currency";

describe("formatRupiah", () => {
  it("should format the number into Indonesian Rupiah format", () => {
    expect(formatRupiah("1000", "Rp.")).toEqual("Rp. 1.000");
    expect(formatRupiah("1000000", "Rp.")).toEqual("Rp. 1.000.000");
    expect(formatRupiah("50000", "Rp.")).toEqual("Rp. 50.000");
    expect(formatRupiah("123456789", "Rp.")).toEqual("Rp. 123.456.789");
  });

  it("should return empty string if the input number is empty", () => {
    expect(formatRupiah("", "Rp.")).toEqual("");
  });

  it("should return an custom symbol if given", () => {
    expect(formatRupiah("1000", "Rp.", ".")).toEqual("Rp. 1.000");
  });
});

describe("formatK", () => {
  it("should format numbers less than 1000 without suffix", () => {
    const number = 500;
    const formattedNumber = formatK({ value: number });
    expect(formattedNumber).toBe("500");
  });

  it('should format numbers greater than or equal to 1000 with "K" suffix', () => {
    const number = 1500;
    const formattedNumber = formatK({ value: number });
    expect(formattedNumber).toBe("1.5K");
  });

  it('should format negative numbers with "K" suffix', () => {
    const number = -2500;
    const formattedNumber = formatK({ value: number });
    expect(formattedNumber).toBe("-2.5K");
  });
});

describe("countableNumber", () => {
  it('should convert 1234567 to "Satu Juta Dua Ratus Tiga Puluh Empat Ribu Lima Ratus Enam Puluh Tujuh"', () => {
    const input = 1234567;
    const result = countableNumber(input);
    expect(result).toBe(
      "Satu Juta Dua Ratus Tiga Puluh Empat Ribu Lima Ratus Enam Puluh Tujuh",
    );
  });

  it('should convert 987654321 to "Sembilan Ratus Delapan Puluh Tujuh Juta Enam Ratus Lima Puluh Empat Ribu Tiga Ratus Dua Puluh Satu"', () => {
    const input = 987654321;
    const result = countableNumber(input);
    expect(result).toBe(
      "Sembilan Ratus Delapan Puluh Tujuh Juta Enam Ratus Lima Puluh Empat Ribu Tiga Ratus Dua Puluh Satu",
    );
  });
});

describe("formatPriceDigit", () => {
  it("should format values less than 1000 correctly", () => {
    expect(formatPriceDigit(100)).toBe("100");
    expect(formatPriceDigit(999)).toBe("999");
  });

  it("should format values between 1000 and 999999 as k", () => {
    expect(formatPriceDigit(1000)).toBe("1k");
    expect(formatPriceDigit(999999)).toBe("999k");
  });

  it("should format values of one million or more as M", () => {
    expect(formatPriceDigit(1000000)).toBe("1M");
    expect(formatPriceDigit(1200000)).toBe("1.2M");
    expect(formatPriceDigit(10000000)).toBe("10M");
  });

  it("should format values of one billion or more as B", () => {
    expect(formatPriceDigit(1000000000)).toBe("1B");
    expect(formatPriceDigit(1200000000)).toBe("1.2B");
  });
});
