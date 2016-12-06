import fs from "fs";

export default function findFiles(dir, test) {
  return fs.readdirSync(dir).
    reduce((files, file) => {
      const path = `${dir}/${file}`;
      const stats = fs.statSync(path);
      if (stats.isFile() && test(file)) {
        return files.concat(path);
      } else if (stats.isDirectory()) {
        return files.concat(findFiles(path, test));
      } else {
        return files;
      }
    }, []);
}
