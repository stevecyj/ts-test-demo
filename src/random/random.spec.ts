import { vi, it, expect, describe } from "vitest";
import { generateRandomString } from "./random";

describe("Math.random", () => {
  it("should generate random string", () => {
    vi.spyOn(Math, "random").mockImplementation(() => 0.1); // 控制 Math.random() 的回傳值
    const length = 10;
    const result = generateRandomString(length);
    expect(result).toBe("GGGGGGGGGG");
  });
});
