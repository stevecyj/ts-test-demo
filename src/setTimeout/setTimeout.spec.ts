import { it, expect, describe, vi } from "vitest";
import { User } from "./setTimeout";

describe("setTimeout", () => {
  it("should fetch User data", () => {
    vi.useFakeTimers();

    const user = new User("1");
    const delay = 1000;
    const callback = vi.fn();
    user.fetchData(callback, delay);
    // vi.advanceTimersByTime(delay); // Advance time by 1000ms
    // vi.advanceTimersToNextTimer(); // Advance time to next timer

    vi.runAllTimers(); // Advance time to next timer

    expect(callback).toBeCalledWith(`Data of user 1`);
  });
});
