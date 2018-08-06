const cloudinary = require('cloudinary');
const fs = require('fs');
const path = require('path');

const options = { type: 'upload',
                  max_results: 500,
                  context: true,
                  tags: true
                }

cloudinary.v2.api.resources(options, function(error, result){
  if (error) {
    console.error('error while loading photos', error);
  } else {
    const results = []
  
    result.resources.forEach(image => {
      const product = {}
      const parts = image.public_id.split('/')
      if (parts.length === 2 && image.context !== undefined) {
        product.id = parts[1]
        product.type = parts[0]
        product.prix = image.context.custom.prix
        if (image.context.custom.taille) {
          product.taille = image.context.custom.taille
        } 
        product.title = image.context.custom.caption
        product.description = image.context.custom.alt
        product.image = image.secure_url
        results.push(product)
      }
    })
    fs.writeFile(path.join('src', 'app', 'products.ts'), 'export const all = ' + JSON.stringify(results, null, 2), err => {
      if (err) throw `error writing dest ${dest}`
    });
  }
});