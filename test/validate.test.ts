import Validate from "../src/validate"

const valid: Validate = new Validate()

describe("ValidateUtil test", () => {
  describe.each([
    [{ test1: "test" }, ["test1"], true],
    [{ test1: "test" }, [], false],
    [{ test1: "test" }, undefined, false],
  ])(".objectValueValid(%o, %o)", (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(valid.objectValueValid(a, b)).toBe(expected)
    })
  })
})
