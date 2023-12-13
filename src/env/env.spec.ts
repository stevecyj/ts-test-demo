import { afterEach, it, expect, vi, describe } from "vitest";
import { doubleUserAge } from "./env";

afterEach(() => {
  vi.unstubAllEnvs();
});

it("first process", () => {
  // process.env.USER_AGE = "24";
  vi.stubEnv("USER_AGE", "24");

  const result = doubleUserAge();
  expect(result).toBe(48);
});

it("second process", () => {
  console.log("second process =====> ", process.env.USER_AGE);
});
