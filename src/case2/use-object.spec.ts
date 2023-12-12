import { it, expect, describe, vi } from "vitest";
import { tellAge, tellByFunction } from "./use-object";
import { config } from "./config";

describe("使用物件", () => {
  it("屬性", () => {
    config.allowTellAge = false;
    const result = tellAge();
    expect(result).toBe("不告訴你");
  });

  it("方法", () => {
    config.getAge = () => 20;
    const result = tellByFunction();
    expect(result).toBe("no");
  });
});
