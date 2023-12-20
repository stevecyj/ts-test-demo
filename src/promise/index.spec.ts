import { it, expect, describe, vi } from "vitest";
import { fetchUserData, delay } from "./index";

describe("Promise", () => {
  it("normal", async () => {
    const data = await fetchUserData();
    expect(data).toBe("1");
  });

  it.only("delay", async () => {
    vi.useFakeTimers();
    const data = delay(1000); // 流程会等待 1s
    vi.advanceTimersToNextTimer();
    expect(data).resolves.toBe("ok"); // 但是这里的 data 是 Promise 对象
  });
});
