import { it, expect, describe, vi } from "vitest";
import { sayHi } from "./setInterval";

describe("setInterval", () => {
  it("should call one", () => {
    vi.useFakeTimers();
    vi.spyOn(console, "log");
    sayHi();
    // vi.advanceTimersByTime(1000); // Advance time by 1000ms
    vi.advanceTimersToNextTimer(); // Advance time to next timer
    vi.advanceTimersToNextTimer();
    // vi.advanceTimersByTime(2000);

    expect(console.log).toBeCalledWith("hi");
  });
});
