import { readAndProcessFile } from "./readAndProcessFile";
import { readFileSync } from "fs";

// 建立第2個參數 fileReader 物件
class FileReader {
  read(filePath: string) {
    readFileSync(filePath, { encoding: "utf-8" });
  }
}

const result = readAndProcessFile("example.txt", new FileReader());

console.log("result =====> ", result);
