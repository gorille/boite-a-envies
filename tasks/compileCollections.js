const fs = require('fs');
const util = require('util');
const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const path = require('path');

async function loadContent(folder, dest) {

  try {
    const files = await readDir(folder);
    let result = []

    for ( file of files) {
      result.push( JSON.parse(await readFile(path.join(folder, file))) )
    }

    fs.writeFile(path.join('src', 'api', `${dest}.json`), JSON.stringify(result), err => {
      if (err) throw `error writing dest ${dest}`
    }

  )

  } catch (err ) {
    console.error('error reading folder');
  }

}


loadContent('_bracelets', 'bracelets');
