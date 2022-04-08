interface ValidateUtil {
  objectValueValid(object: UnknownObject, keys?: string[]): any
}
export default class Validate implements ValidateUtil {
  objectValueValid(object: UnknownObject, keys?: string[]): any {
    let keysArr: string[] = []
    if (keys) {
      keysArr = keys
    } else {
      keysArr = Object.keys(object)
    }
    const filtered = keysArr.filter((key) => object[key] === undefined || object[key] === null || object[key] === "")
    if (filtered.length > 0) {
      return false
    } else {
      return true
    }
  }
}
