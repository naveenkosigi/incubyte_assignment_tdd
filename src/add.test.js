import { add } from "./Input";

describe("add Method Test Cases", () => {
  test("Testing if empty", () => {
    expect(add("")).toBe(0);
  });

  test("If comma Seperated", () => {
    expect(add("1")).toBe(1);
    expect(add("1,2,3")).toBe(6);
  });

  test("If seperated over new lines", () => {
    expect(add("1\n2")).toBe(3);
    expect(add("1\n2,3,4\n10")).toBe(20);
  });

  test("If the delimiter is changed to :", () => {
    expect(add("//:\n1")).toBe(1);
    expect(add("//:\n1:2:3\n4\n5")).toBe(15);
  });
});
