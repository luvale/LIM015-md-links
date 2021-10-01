const {
  pathExists, isAbsolute, relToAbs, getMd, getLinks,
} = require('./api');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (pathExists(path)) {
    const absolutePath = isAbsolute(path) ? path : relToAbs(path);
    const Mds = getMd(absolutePath);
    const links = getLinks(Mds);
    if (links.length !== 0) {
      resolve(links);
    } else {
      reject(new Error('Template de que NO HAY LINKS'));
    }
  } else {
    reject(new Error('Template que diga que el PATH NO EXISTE'));
  }
});
/* PATHS para probar
const elReadMe = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/README.md';
const unJs = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/api.js';
const sinMd = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaSinMd';
const conMd = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz';
*/
// console.log(mdLinks(elReadMe).then((res) => res).catch((err) => err));
module.exports = { mdLinks };
