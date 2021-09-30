const { pathExists, isAbsolute, relToAbs } = require('./api');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (pathExists(path)) {
    const absolutePath = isAbsolute(path) ? path : relToAbs(path);
    console.log(absolutePath);
  } else {
    console.log('el path NO existe');
  }
});
console.log(mdLinks('carpetaSinMd/túpuedes.js'));
