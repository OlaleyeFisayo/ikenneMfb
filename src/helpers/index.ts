import { FormField } from "./types";

export function convertToObject(arr: FormField[]): Record<string, any> {
  const result: Record<string, any> = {};
  for (let i = 0; i < arr.length; i++) {
    const { tag, value } = arr[i];
    result[tag] = value;
  }
  return result;
}

export function checkValues(arr?: any[]) {
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].value === null || arr[i].value === "") {
        return true;
      }
    }
    return false;
  }
}

export const isFormComplete = (formObject: any) =>
  Object.values(formObject).some((v) => !v);
