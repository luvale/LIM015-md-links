#!/usr/bin/env node
const { mdLinks } = require('./mdLinks');

const userPath = process.argv[2];
const options = process.argv.slice(3);
const validate = options.includes('--validate');
// console.log(options);
// console.log(validate);

if (options.length === 0) {
  console.log('no hay options');
  mdLinks(userPath, { validate: false })
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject));
} else if (validate) {
  console.log('pusiste validate');
  mdLinks(userPath, { validate: true })
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject));
}

// console.log(userPath, options);

/* PATHS para probar
const elReadMe = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/README.md';
const unJs = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/api.js';
const sinMd = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaSinMd';
*/
// const conMd = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz';
