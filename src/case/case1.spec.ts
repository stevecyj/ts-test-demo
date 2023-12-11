import { doubleUserAge } from "./index";
import { vi, it, expect, describe } from "vitest";

// stub, 替換掉真實的邏輯實現
vi.mock("./user", () => {
  return {
    userAge: () => 2,
  };
});

describe("間接 input", () => {
  it("first", () => {
    // given

    // when
    const actual = doubleUserAge();

    // then
    expect(actual).toBe(4);
  });
});
