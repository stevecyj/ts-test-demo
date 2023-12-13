import { vi, it, expect } from "vitest";
import { doubleUserAge, doubleHeight } from "./user";

vi.mock("./window", () => {
  return {
    innerHeightFN: () => 250,
  };
});

it("doubleUserAge", () => {
  vi.stubGlobal("jojo", { age: 10 });

  const result = doubleUserAge();
  expect(result).toBe(20);

  vi.unstubAllGlobals();
});

it("double inner height", () => {
  vi.stubGlobal("innerHeight", 100);

  const result = doubleHeight();
  expect(result).toBe(500);

  vi.unstubAllGlobals();
});

it("function", () => {
  // console.log("innerHeight", innerHeight);
  const result = doubleHeight();
  expect(result).toBe(500);
});
