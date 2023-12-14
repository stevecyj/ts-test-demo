// import { readFileSync } from "fs";

// export class ReadAndProcessFile {
//   run(filePath: string) {
//     const content = readFileSync(filePath, { encoding: "utf-8" });
//     return content + "→unit test";
//   }
// }

export interface IFileReader {
  read(filePath: string): string;
}

export class ReadAndProcessFile {
  private _fileReader: IFileReader;
  constructor(fileReader: IFileReader) {
    this._fileReader = fileReader;
  }

  run(filePath: string) {
    const content = this._fileReader.read(filePath);
    return content + "→unit test";
  }
}
