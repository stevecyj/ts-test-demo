import { it, expect, describe } from "vitest";
import { View } from "./view";
import flushPromises from "flush-promises";

describe("View", () => {
  it("should change count", async () => {
    const view = new View();
    view.render();
    await flushPromises(); // 把所有的 Promise 都执行完

    expect(view.count).toBe(3);
  });
});
