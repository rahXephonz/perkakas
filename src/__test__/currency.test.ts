import { formatK, formatRupiah } from "../currency";

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
