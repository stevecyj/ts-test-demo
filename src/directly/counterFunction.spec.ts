import { afterEach, it, expect, describe } from "vitest";
import { getCount, incrementCount, reset } from "./counterFunction";

afterEach(() => {
  reset();
});

describe("counter function", () => {
  it("increment", () => {
    // 預設 0 to 1
    incrementCount();
    expect(getCount()).toBe(1);
  });

  it("increment second", () => {
    incrementCount();
    expect(getCount()).toBe(1);
  });
});
