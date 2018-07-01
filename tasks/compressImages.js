const fs = require('fs');
const util = require('util');
const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const path = require('path');
const sharp = require('sharp');

async function compress(folder) {

  try {
    const files = await readDir(folder);

    console.log(`files to compress ${files}`);

    for ( file of files) {
      if ( file.endsWith('JPG')) {
        console.log(`compressing ${file}`);
        await sharp(path.join('images', file))
          .resize(500)
          .toFile(path.join('src', 'assets', 'images', file));
        fs.unlink(path.join('images', file), (err) => {
          if (err) throw err;
          console.log(`successfully deleted ${path.join('images', file)}`);
        });

      }
    }
  } catch (err ) {
    console.error('error reading folder');
  }
}


compress('images');
