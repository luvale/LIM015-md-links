// File System
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

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
    readDir[i] = path.join(p, '/', readDir[i]);
    // console.log(readDir[i]);
    // console.log(readDir[i], isMd(readDir[i]));
    if (isMd(readDir[i])) {
      mdArray.push(readDir[i]);
    } else if (isDirectory((readDir[i]))) {
      // console.log(mdInDir(readDir[i]));
      mdArray = mdArray.concat(mdInDir(readDir[i]));
    }
  }
  return mdArray;
};

const getLinks = (p) => {
  const obj = [];
  const fileContent = fs.readFileSync(p, 'utf-8');
  const regexLinkNText = /\[(\w.+)\]\((https):\/\/[^ "]\S+\)/g;
  const LinkNText = fileContent.match(regexLinkNText);
  if (LinkNText !== null) {
    LinkNText.forEach((linkNText) => {
      obj.push({
        href: linkNText.split('](')[1].slice(0, -1),
        text: linkNText.split('](')[0].slice(1),
        file: p,
      });
    });
  }
  return obj;
};

// const practice = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/otraCarpeta/nopuedeser.md';

const ok = 'https://github.com/luvale/LIM015-md-links';
const fail = 'https://github.com/luvale/LIM015-md-link';
const obj = {
  href: 'https://es.wikipedia.org/wiki/Markdow',
  text: 'Markdown',
  file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md'
};

const linkStatus = (obj) => {
  const response = [];
  return fetch(obj.href)
  .then((res) => {
    // console.log(res);
       response.push({
        href: obj.href,
        text: obj.text,
        file: obj.file,
        status: res.status,
        message: res.ok ? 'ok' : 'fail', // res.status >= 200 && res.status < 300
      })
      return response;
  })
  .catch((error) => console.log(error))
};

console.log(linkStatus(obj).then((response) => console.log(response)));

module.exports = {
  pathExists,
  isAbsolute,
  relToAbs,
  isDirectory,
  isMd,
  mdInDir,
  getLinks,
};

/*
module.exports = () => {
// ...
};
*/
