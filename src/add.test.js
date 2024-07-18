import { add } from "./Input";

describe("add Method Test Cases", () => {
  test("Testing if empty", () => {
    expect(add("")).toBe(0);
  });

  test("If comma Seperated", () => {
    expect(add("1")).toBe(1);
    expect(add("1,2,3")).toBe(6);
  });
});
