import { tw } from "../tailwind";

describe("tw function utility", () => {
  it("should merge class names correctly", () => {
    const result = tw("class1", "class2", "class3");
    expect(result).toBe("class1 class2 class3");
  });

  it("should handle empty values", () => {
    const result = tw("class1", "", "class2", null, undefined, "class3");
    expect(result).toBe("class1 class2 class3");
  });

  it("should handle arrays of class names", () => {
    const classNames = ["class1", "class2", "class3"];
    const result = tw(classNames);
    expect(result).toBe("class1 class2 class3");
  });

  it("should handle class names as objects", () => {
    const result = tw({ class4: true, class5: false, class6: true });
    expect(result).toBe("class4 class6");
  });

  it("should be merge classnames both array, object and string", () => {
    const result = tw(
      "class1",
      "class2",
      "class3",
      { class4: true, class5: false, class6: true },
      ["class7"],
    );
    expect(result).toBe("class1 class2 class3 class4 class6 class7");
  });

  it("should be merge and prevent duplicates tailwind classname", () => {
    const result = tw("my-2", "my-2", "class2");
    expect(result).toBe("my-2 class2");
  });
});
