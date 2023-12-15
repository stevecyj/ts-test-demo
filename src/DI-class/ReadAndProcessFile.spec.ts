import { it, expect, describe } from "vitest";
import { ReadAndProcessFile, IFileReader } from "./ReadAndProcessFile";

describe("di - class", () => {
  it("構造函數", () => {
    // 不需要關注如何實現，只要返回結果即可
    class StubFileReader implements IFileReader {
      read(filePath: string): string {
        return "file content";
      }
    }
    const readAndProcessFile = new ReadAndProcessFile(new StubFileReader()); // 透過構造函數注入
    const result = readAndProcessFile.run("file path");
    expect(result).toBe("file content→unit test");
  });

  it.only("屬性", () => {
    class StubFileReader implements IFileReader {
      read(filePath: string): string {
        return "file content";
      }
    }
    const readAndProcessFile = new ReadAndProcessFile();
    readAndProcessFile.fileReader = new StubFileReader(); // 透過屬性注入
    const result = readAndProcessFile.run("file path");
    expect(result).toBe("file content→unit test");
  });

  it("方法", () => {});
});
