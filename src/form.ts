/**
 * Converts a FormData object to a JSON object.
 *
 * @param formData - The FormData object to convert.
 * @returns A JSON object where keys are form field names and values are form field values.
 */
export function convertFormDataToJsonObject(formData: FormData): {
  [key: string]: any;
} {
  const jsonObject: { [key: string]: any } = {};

  formData.forEach((value, key) => {
    jsonObject[key] = value;
  });

  return jsonObject;
}

/**
 * Converts a JSON object to FormData.
 *
 * @param jsonObject - The JSON object to convert.
 * @returns A FormData object with fields populated from the JSON object.
 */
export function convertJsonObjectToFormData(jsonObject: {
  [key: string]: any;
}): FormData {
  const formData = new FormData();

  for (const key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      formData.append(key, jsonObject[key]);
    }
  }

  return formData;
}
