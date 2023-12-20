import { beforeEach, afterEach, vi, it, expect, describe } from "vitest";
import { checkFriday } from "./date";

describe("date", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should be happy when it`s Friday", () => {
    // choose a Friday
    vi.setSystemTime(new Date("2021-01-01"));

    const result0101 = checkFriday();
    console.log("result0101", result0101);
    expect(result0101).toBe("happy");
  });

  it("should be sad when it`s not Friday", () => {
    // choose a not Friday
    vi.setSystemTime(new Date("2021-01-02"));

    const result0102 = checkFriday();
    console.log("result0202", result0102);
    expect(result0102).toBe("sad");
  });

  it("should third times", () => {
    const resultThird = checkFriday();
    console.log("resultThird", resultThird);
  });
});
