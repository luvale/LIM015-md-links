const {
  pathExists, isAbsolute, relToAbs, getMd, getLinks, linkStatus,
} = require('./api');
const { noLinks, errorPath } = require('./messages');

const mdLinks = (path, options = { validate: false }) => new Promise((resolve, reject) => {
  if (pathExists(path)) {
    const absolutePath = isAbsolute(path) ? path : relToAbs(path);
    const Mds = getMd(absolutePath);
    const links = getLinks(Mds);
    if (links.length !== 0) {
      if (options.validate === true) {
        const mapDeLinks = links.map((link) => linkStatus(link));
        resolve(Promise.all(mapDeLinks));
      } else {
        resolve(links);
      }
    } else {
      reject(noLinks);
    }
  } else {
    reject(errorPath);
  }
});

module.exports = { mdLinks };
