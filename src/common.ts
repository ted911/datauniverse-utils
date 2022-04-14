interface CommonUtils {
  createGUID(): string
}
export default class Common implements CommonUtils {
  createGUID(): string {
    const guid = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    return `${guid()}${guid()}-${guid()}-${guid()}-${guid()}-${guid()}${guid()}${guid()}`
  }
}
