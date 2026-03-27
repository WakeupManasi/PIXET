import * as fs from "fs";

export function createFile(filePath: string, content: string) {
  fs.writeFileSync(filePath, content);
}
