import { vi, it, expect } from "vitest";
import { doubleUserAge } from "./user";

it("doubleUserAge", () => {
  vi.stubEnv("VITE_USER_AGE", "10");

  const result = doubleUserAge();
  expect(result).toBe(20);
  vi.unstubAllEnvs();
});
