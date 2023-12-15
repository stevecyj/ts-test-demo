import { readFileSync } from "fs";

// 建立第2個參數 fileReader class

export class FileReader {
  read(filePath: string) {
    return readFileSync(filePath, { encoding: "utf-8" });
  }
}
