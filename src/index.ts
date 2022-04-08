import Common from "./common"
import Validate from "./validate"

const commonUtil = new Common()
const validateUtil = new Validate()
export default class Util {
  static get Common(): Common {
    return commonUtil
  }
  static get Valid(): Validate {
    return validateUtil
  }
}
