const {
  pathExists, isAbsolute, relToAbs, getMd,
} = require('./api');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (pathExists(path)) {
    const absolutePath = isAbsolute(path) ? path : relToAbs(path);
    const a = getMd(absolutePath);
    console.log(a);
  } else {
    console.log('Template que diga que el PATH NO EXISTE');
  }
});

const unMd = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/README.md';
const unJs = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/api.js';
const sinMd = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaSinMd';
const conMd = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz';

console.log(mdLinks(unJs));
