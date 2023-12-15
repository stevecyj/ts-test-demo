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

// 透過構造器注入
// export class ReadAndProcessFile {
//   private _fileReader: IFileReader;

//   // 透過構造器依賴注入
//   constructor(fileReader: IFileReader) {
//     this._fileReader = fileReader;
//   }

//   run(filePath: string) {
//     const content = this._fileReader.read(filePath);
//     return content + "→unit test";
//   }
// }

// 屬性
// export class ReadAndProcessFile {
//   private _fileReader: any;
//   constructor() {}

//   run(filePath: string) {
//     const content = this._fileReader.read(filePath);
//     return content + "→unit test";
//   }

//   // 不希望外部直接訪問的話，可以使用 private
//   // get fileReader() {
//   //   return this._fileReader;
//   // }

//   set fileReader(fileReader: IFileReader) {
//     this._fileReader = fileReader;
//   }
// }

// 方法
export class ReadAndProcessFile {
  private _fileReader: any;
  constructor() {}

  run(filePath: string) {
    const content = this._fileReader.read(filePath);
    return content + "→unit test";
  }

  // 透過方法注入，修改方法名稱意義較明確
  setFileReader(fileReader: IFileReader) {
    this._fileReader = fileReader;
  }
}
