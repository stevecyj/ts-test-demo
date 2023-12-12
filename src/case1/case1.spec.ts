// import { doubleUserAge } from "./index";
import { userAge, fetchUserAge } from "./user";
import { vi, it, expect, describe } from "vitest";

// stub, 替換掉真實的邏輯實現
vi.mock("./user", () => {
  return {
    userAge: () => 3,
    fetchUserAge: () => Promise.resolve(6),
  };
});

// vi.mock("./user");

describe("間接 input", () => {
  // beforeEach(() => {
  //   vi.doMock("./user", () => {
  //     return {
  //       userAge: () => 3,
  //     };
  //   });
  // });

  it.only("second", async () => {
    // given
    // vi.mocked(userAge).mockReturnValue(3);
    // const { doubleUserAge } = await import("./index");

    // when
    const actual = await fetchUserAge();

    // then
    expect(actual).toBe(6);
  });

  // it("first", async () => {
  //   // given
  //   vi.mocked(userAge).mockReturnValue(2);
  //   const { doubleUserAge } = await import("./index");

  //   // when
  //   const actual = doubleUserAge();

  //   // then
  //   expect(actual).toBe(4);
  // });
});
