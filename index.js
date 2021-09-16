// File System
const fs = require('fs');
const path = require('path');

const pathExists = (p) => fs.existsSync(p);

const isAbsolute = (p) => path.isAbsolute(p);

const relToAbs = (p) => path.resolve(p);

// const practice = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/index.js';
// console.log(relToAbs(practice));

module.exports = {
  pathExists,
  isAbsolute,
  relToAbs,
};

/*
module.exports = () => {
// ...
};
*/
