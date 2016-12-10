// Copyright (C) 2016 Luka Novsak <lnovsak@gmail.com>
//
// This file is part of replay.
//
// replay is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// replay is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with replay.  If not, see <http://www.gnu.org/licenses/>.

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
