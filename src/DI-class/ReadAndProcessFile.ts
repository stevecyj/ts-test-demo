// import { readFileSync } from "fs";

// export class ReadAndProcessFile {
//   run(filePath: string) {
//     const content = readFileSync(filePath, { encoding: "utf-8" });
//     return content + "→unit test";
//   }
// }
// 以上強耦合了 fs

export interface IFileReader {
  read(filePath: string): string;
}

export class ReadAndProcessFile {
  private _fileReader: IFileReader;

  // 透過構造器依賴注入
  constructor(fileReader: IFileReader) {
    this._fileReader = fileReader;
  }

  run(filePath: string) {
    const content = this._fileReader.read(filePath);
    return content + "→unit test";
  }
}
