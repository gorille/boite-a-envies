const fs = require('fs');
const util = require('util');
const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const path = require('path');

async function loadContent(folder) {

  try {
    const files = await readDir(folder);
    let result = []

    for ( file of files) {
      const data = JSON.parse(await readFile(path.join(folder, file)))
      data.id = path.basename(file, '.json')
      result.push( data )
    }

    fs.writeFile(path.join('src', 'app', 'products.ts'), 'export const all = ' + JSON.stringify(result, null, 2), err => {
      if (err) throw `error writing dest ${dest}`
    }

  )

  } catch (err ) {
    console.error('error reading folder');
  }

}


loadContent('_products');
