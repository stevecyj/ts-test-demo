import { FileReader } from "./FileReader";
import { readAndProcessFile } from "./readAndProcessFile";

const result = readAndProcessFile("example.txt", new FileReader());

console.log("result =====> ", result);
