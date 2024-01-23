import {
  countableNumber,
  formatCryptoValue,
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

  it("should format values as K", () => {
    expect(formatPriceDigit(1000)).toBe("1.0K");
    expect(formatPriceDigit(1714)).toBe("1.7K");
    expect(formatPriceDigit(15400)).toBe("15.4K");
    expect(formatPriceDigit(155895)).toBe("155.9K");
    expect(formatPriceDigit(888888)).toBe("888.9K");
    expect(formatPriceDigit(999999)).toBe("1000.0K");
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

describe("formatCryptoValue", () => {
  it("should format crypto value correctly", () => {
    expect(formatCryptoValue(2)).toBe("2");
    expect(formatCryptoValue(0.0123456)).toBe("0.0123456");
  });

  it("should format crypto value correctly with decimal places", () => {
    expect(formatCryptoValue(0.12345, 1)).toBe("0.1");
    expect(formatCryptoValue(0.12345, 2)).toBe("0.12");
    expect(formatCryptoValue(0.12345, 3)).toBe("0.123");
  });
});
