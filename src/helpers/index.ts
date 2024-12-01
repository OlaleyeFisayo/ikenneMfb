export function convertToObject(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const { tag, value } = arr[i];
    let parsedValue = value;
    result[tag] = parsedValue;
  }
  return result;
}

export function checkValues(arr?: []) {
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
