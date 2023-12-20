import { it, expect, describe } from "vitest";
import { fetchUserData, delay } from "./index";

describe("Promise", () => {
  it.only("normal", async () => {
    const data = await fetchUserData();
    expect(data).toBe("1");
  });

  it("delay", async () => {});
});
