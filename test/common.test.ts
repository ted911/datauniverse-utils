import { Common } from "../src/common"

test("테스트", () => {
  const common = new Common()

  common.test()
  expect(common.test()).toBe(true)
})
