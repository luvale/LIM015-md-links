const { pathExists } = require('./api.js');

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (pathExists(path)) {
      console.log('el path existe');
    };
  })
};
console.log(mdLinks('/Users/luva/Laboratoria/Md Links/LIM015-md-links/api.js'));