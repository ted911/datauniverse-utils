interface CommonUtils {
  createGUID(): string
  openPopup(url: string, width: number, height: number): Window | null
}
export default class Common implements CommonUtils {
  openPopup(url: string, width: number, height: number): Window | null {
    return window.open(url, "popup", `width=${width}, height=${height}, menubar=no, status=no`)
  }
  createGUID(): string {
    const guid = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    return `${guid()}${guid()}-${guid()}-${guid()}-${guid()}-${guid()}${guid()}${guid()}`
  }
}
