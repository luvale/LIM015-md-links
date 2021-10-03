const {
  pathExists, isAbsolute, relToAbs, getMd, getLinks, linkStatus,
} = require('./api');

const mdLinks = (path, options = { validate: false }) => new Promise((resolve, reject) => {
  if (pathExists(path)) {
    const absolutePath = isAbsolute(path) ? path : relToAbs(path);
    const Mds = getMd(absolutePath);
    const links = getLinks(Mds);
    // console.log(links);
    if (links.length !== 0) {
      if (options.validate === true) {
        const mapDeLinks = links.map((link) => linkStatus(link));
        resolve(Promise.all(mapDeLinks));
      } else {
        resolve(links);
      }
    } else {
      reject(new Error('Template de que NO HAY LINKS'));
    }
  } else {
    reject(new Error('Template que diga que el PATH NO EXISTE'));
  }
});

// console.log(mdLinks(conMd).then((res) => res).catch((err) => err));
module.exports = { mdLinks };
