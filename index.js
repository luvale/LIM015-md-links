// File System
const fs = require('fs');
const path = require('path');

const pathExists = (p) => fs.existsSync(p);

const isAbsolute = (p) => path.isAbsolute(p);

const relToAbs = (p) => path.resolve(p);

const isDirectory = (p) => fs.statSync(p).isDirectory();

const isMd = (p) => path.extname(p) === '.md';

const practice = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/prueba';
// console.log(isMd(practice));

const mdInDir = (p) => {
  const readDir = fs.readdirSync(p);
  for (let i = 0; i < readDir.length; i++) {
    // console.log(readDir[i], isMd(readDir[i]));
    if (isMd(readDir[i])) {
      console.log(readDir[i]);
    }
  } 
  return readDir;
};

console.log(mdInDir(practice));


module.exports = {
  pathExists,
  isAbsolute,
  relToAbs,
  isDirectory,
  isMd,
};

/*
module.exports = () => {
// ...
};
*/
