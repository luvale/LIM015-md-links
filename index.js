// File System
const fs = require('fs');
const path = require('path');

const pathExists = (p) => fs.existsSync(p);

const isAbsolute = (p) => path.isAbsolute(p);

const relToAbs = (p) => path.resolve(p);

const isDirectory = (p) => fs.statSync(p).isDirectory();

// const practice = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/test';

// console.log(relToAbs(practice));

module.exports = {
  pathExists,
  isAbsolute,
  relToAbs,
  isDirectory,
};

/*
module.exports = () => {
// ...
};
*/
