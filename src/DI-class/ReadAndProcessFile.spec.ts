import { it, expect, describe } from "vitest";
import { ReadAndProcessFile, IFileReader } from "./ReadAndProcessFile";

describe("di - class", () => {
  it.only("構造函數", () => {
    // 不需要關注如何實現，只要返回結果即可
    class StubFileReader implements IFileReader {
      read(filePath: string): string {
        return "file content";
      }
    }
    const readAndProcessFile = new ReadAndProcessFile(new StubFileReader());
    const result = readAndProcessFile.run("file path");
    expect(result).toBe("file content→unit test");
  });

  it("屬性", () => {});

  it("方法", () => {});
});
