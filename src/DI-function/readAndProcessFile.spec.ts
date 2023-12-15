import { it, expect, describe } from "vitest";
import { readAndProcessFile } from "./readAndProcessFile";

describe("di function", () => {
  it("read and process file", () => {
    // 建立 StubFileReader class
    class StubFileReader {
      read(filePath: string) {
        return "JOJO";
      }
    }

    // path 可以任意填寫，因為我們已經用 StubFileReader 假裝讀取檔案了
    const result = readAndProcessFile("./test", new StubFileReader());
    expect(result).toBe("JOJO → test unit");
  });
});
