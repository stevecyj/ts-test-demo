import { it, expect, describe, vi } from "vitest";
import { doubleUserAge } from "./use-class";

vi.mock("./User", () => {
  return {
    User: class User {
      age: number = 24;
      name: string = "JOJO";

      getAge(): number {
        return this.age;
      }
    },
  };
});

describe("使用 class", () => {
  it("屬性", () => {
    const result = doubleUserAge();
    expect(result).toBe(48);
  });

  it("方法", () => {});
});
