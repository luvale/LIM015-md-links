const {
  pathExists, isAbsolute, relToAbs, isDirectory, mdInDir, isMd,
} = require('./api');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (pathExists(path)) {
    const absolutePath = isAbsolute(path) ? path : relToAbs(path);
    const findMd = isDirectory(absolutePath) ? mdInDir(absolutePath) : absolutePath;
    // console.log(md);
    /* if (findMd.length !== 0) {
      console.log(findMd);
    } else if (isMd(findMd)) {
      console.log('es md');
    } else if (findMd.length === 0) {
      console.log('Template que diga que NO hay archivos MD');
    } */
  } else {
    console.log('Template que diga que el PATH NO EXISTE');
  }
});

const unMd = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/README.md';
const unJs = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/api.js';
const sinMd = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaSinMd';
const conMd = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz';

console.log(mdLinks(unJs));
