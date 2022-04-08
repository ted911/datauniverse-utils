import Common from "../src/common"
const common = new Common()

describe("CommonUtil Test", () => {
  test("GUID 생성", () => {
    const guid = common.createGUID()
    expect(guid).toBeTruthy()
    expect(typeof guid).toBe("string")
    expect(guid.split("-").length).toBe(5)
  })
})
