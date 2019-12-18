import linter from "../../src/linter";
import rule from "../../src/rules/warningInvalidButtonSize";
import error from "../error";

describe("warningInvalidButtonSize", () => {
  test("should return error when button size not one step larger than text size", () => {
    const json = `{
  "block": "warning",
  "content": [
    { "block": "text", "mods": { "size": "l" } },
    { "block": "button", "mods": { "size": "s" } }
  ]
}`;
    const expected = [error("WARNING.INVALID_BUTTON_SIZE", 5, 5, 5, 51)];

    const result = linter(json, [rule]);

    expect(result).toMatchObject(expected);
  });

  test("should return empty array when button size one step larger than text size", () => {
    const json = `{
  "block": "warning",
  "content": [
    { "block": "text", "mods": { "size": "l" } },
    { "block": "button", "mods": { "size": "xl" } }
  ]
}`;

    const result = linter(json, [rule]);

    expect(result.length).toBe(0);
  });
});
