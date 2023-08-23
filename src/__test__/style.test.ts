import { textEllipsis } from "../style";

describe("textEllipsis", () => {
  it("should truncate text at the start with ellipsis", () => {
    const input = {
      position: "start" as const,
      text: "Hello World",
      length: 5,
    };
    const result = textEllipsis(input);
    expect(result).toBe("...World");
  });

  it("should truncate text in the middle with ellipsis", () => {
    const input = {
      position: "middle" as const,
      text: "Hello World",
      length: 5,
    };
    const result = textEllipsis(input);
    expect(result).toBe("Hello...World");
  });

  it("should truncate text at the end with ellipsis", () => {
    const input = { position: "end" as const, text: "Hello World", length: 5 };
    const result = textEllipsis(input);
    expect(result).toBe("Hello...");
  });

  it("should return an empty string if text is empty", () => {
    const input = { position: "end" as const, text: "", length: 5 };
    const result = textEllipsis(input);
    expect(result).toBe("");
  });
});
