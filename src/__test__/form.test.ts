import {
  convertFormDataToJsonObject,
  convertJsonObjectToFormData,
} from "../form";

describe("convertJsonObjectToFormData", () => {
  it("should convert a JSON object to FormData", () => {
    const jsonObject = {
      name: "John Doe",
      email: "john@example.com",
      age: "30",
    };

    const formData = convertJsonObjectToFormData(jsonObject);

    // Check if formData has the expected fields
    expect(formData.get("name")).toBe("John Doe");
    expect(formData.get("email")).toBe("john@example.com");
    expect(formData.get("age")).toBe("30");
  });
});

describe("convertFormdataToJsonObject", () => {
  it("should convert FormData to a JSON object", () => {
    const formData = new FormData();
    formData.append("name", "John Doe");
    formData.append("email", "john@example.com");
    formData.append("age", "30");

    const jsonObject = convertFormDataToJsonObject(formData);

    // Check if jsonObject has the expected fields and values
    expect(jsonObject).toEqual({
      name: "John Doe",
      email: "john@example.com",
      age: "30",
    });
  });
});
