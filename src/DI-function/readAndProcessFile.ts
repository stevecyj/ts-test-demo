// import { readFileSync } from "fs";
import { FileReader } from "./FileReader"; // 建立第2個參數 fileReader class

export function readAndProcessFile(
  filePath: string,
  fileReader: FileReader // fs 在這裡被注入
): string {
  const content: string = fileReader.read(filePath) as unknown as string;

  // 模擬 process 過程
  return content + " → test unit";
}
