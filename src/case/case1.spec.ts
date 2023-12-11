import { doubleUserAge } from "./index";
import { userAge } from "./user";
import { vi, it, expect, describe } from "vitest";

// stub, 替換掉真實的邏輯實現
// vi.mock("./user", () => {
//   return {
//     userAge: () => 2,
//   };
// });

vi.mock("./user");

describe("間接 input", () => {
  it("second", () => {
    // given
    vi.mocked(userAge).mockReturnValue(3);

    // when
    const actual = doubleUserAge();

    // then
    expect(actual).toBe(6);
  });

  it("first", () => {
    // given
    vi.mocked(userAge).mockReturnValue(2);

    // when
    const actual = doubleUserAge();

    // then
    expect(actual).toBe(4);
  });
});
