import { doubleUserAge } from "./index";
import { userAge, fetchUserAge } from "./user";
import { vi, it, expect, describe } from "vitest";

// stub, 替換掉真實的邏輯實現
// vi.mock("./user", () => {
//   return {
//     userAge: () => 3,
//     // fetchUserAge: () => Promise.resolve(6),
//   };
// });

vi.mock("./user");

describe("間接 input", () => {
  it("first", async () => {
    // given
    vi.mocked(userAge).mockReturnValue(8);

    // when
    const actual = doubleUserAge();

    // then
    expect(actual).toBe(16);
  });

  it("second", async () => {
    vi.mocked(userAge).mockReturnValue(12);
    console.log("second userAge", userAge());
  });
});
