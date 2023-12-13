// import { readFileSync } from "fs";

export function readAndProcessFile(filePath: string, fileReader): string {
  const content: string = fileReader.read(filePath, { encoding: "utf-8" });

  return content + " → test unit";
}
