import { vi, it, expect } from "vitest";
import { doubleUserAge, doubleHeight } from "./user";

it("doubleUserAge", () => {
  vi.stubGlobal("jojo", { age: 10 });

  const result = doubleUserAge();
  expect(result).toBe(20);

  vi.unstubAllEnvs();
});

it("double inner height", () => {
  vi.stubGlobal("innerHeight", 10);

  const result = doubleHeight();
  expect(result).toBe(20);

  vi.unstubAllEnvs();
});
