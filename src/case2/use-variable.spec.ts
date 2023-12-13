import { it, expect, describe, vi } from "vitest";
import { tellName } from "./use-variable";

vi.mock("./config", async (importOriginal) => {
  // const config = await importOriginal();
  const config = await vi.importActual("./config");
  console.log("original config: ", config);
  return {
    ...(config as any),
    name: "COCO",
  };
});

describe("使用變數", () => {
  it("tell name", () => {
    const result = tellName();
    expect(result).toBe("COCO is my name");
  });
});
