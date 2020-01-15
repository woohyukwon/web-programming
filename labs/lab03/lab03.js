import fs from 'fs';
import zlib from 'zlib';

class lab03 {

  syncFileRead(filename) {
    var data = fs.readFileSync(filename);
    return data.toString();
  }

  asyncFileRead(filename, callback) {
    fs.readFile(filename, function (err, data)
    {
      if (err) return console.error(err);
      callback(data.toString());
    });
  }

  compressFileStream(inputFile, outputFile) {
    return fs.createReadStream(inputFile)
      .pipe(zlib.createGzip()) .pipe(fs.createWriteStream(outputFile));
  }

  decompressFileStream(inputFile, outputFile) {
    return fs.createReadStream(inputFile)
      .pipe(zlib.createGunzip()).pipe(fs.createWriteStream(outputFile));
  }

  listDirectoryContents(directoryName, callback) {
    fs.readdir(directoryName, function (err, data) {
      if (err) return console.error(err);
      return callback(data);
  });

}

}

export {lab03};
