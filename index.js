// File System
const fs = require('fs');
const path = require('path');

const pathExists = (p) => fs.existsSync(p);

const isAbsolute = (p) => path.isAbsolute(p);

const relToAbs = (p) => path.resolve(p);

const isDirectory = (p) => fs.statSync(p).isDirectory();

const isMd = (p) => path.extname(p) === '.md';

const mdInDir = (p) => {
  let mdArray = [];
  const readDir = fs.readdirSync(p);
  // console.log(readDir);
  for (let i = 0; i < readDir.length; i++) {
    readDir[i] = path.join(p, '/', readDir[i])
    // console.log(readDir[i]);
    // console.log(readDir[i], isMd(readDir[i]));
    if (isMd(readDir[i])) {
     mdArray.push(readDir[i]);
    } else if(isDirectory((readDir[i]))) {
      // console.log(mdInDir(readDir[i]));
      mdArray = mdArray.concat(mdInDir(readDir[i]));
    }
  }
  return mdArray;
};

const practice = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md';

const getLinks = (p) => {
  const fileContent = fs.readFileSync(p, 'utf-8')
  const regexLinkNText = /\[(\w.+)\]\((https):\/\/[^ "]\S+\)/g;
  const LinkNText = fileContent.match(regexLinkNText);
  return LinkNText;
};

console.log(getLinks(practice));

module.exports = {
  pathExists,
  isAbsolute,
  relToAbs,
  isDirectory,
  isMd,
  mdInDir,
};

/*
module.exports = () => {
// ...
};
*/
