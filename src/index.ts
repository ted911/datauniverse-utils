import { Common } from "./common"

const commonUtil = new Common()
export default class Util {
  static get Common(): Common {
    return commonUtil
  }
}
