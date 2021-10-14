/* eslint-disable no-plusplus */
// File System
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const pathExists = (p) => fs.existsSync(p);

const isAbsolute = (p) => path.isAbsolute(p);

const relToAbs = (p) => path.resolve(p);

const isDirectory = (p) => fs.statSync(p).isDirectory();

const isMd = (p) => path.extname(p) === '.md';

const getMd = (p) => {
  let mdArray = [];
  if (isDirectory(p)) {
    const readDir = fs.readdirSync(p);
    for (let i = 0; i < readDir.length; i++) {
      readDir[i] = path.join(p, '/', readDir[i]);
      if (isMd(readDir[i])) {
        mdArray.push(readDir[i]);
      } else if (isDirectory((readDir[i]))) {
        mdArray = mdArray.concat(getMd(readDir[i]));
      }
    }
  } else if (isMd(p)) {
    mdArray.push(p);
  }
  return mdArray;
};

const getLinks = (array) => {
  const allLinks = [];
  array.forEach((md) => {
    const fileContent = fs.readFileSync(md, 'utf-8');
    const regexLinkNText = /\[(\w.+)\]\((https):\/\/[^ "]\S+\)/g;
    const LinkNText = fileContent.match(regexLinkNText);
    if (LinkNText !== null) {
      LinkNText.forEach((linkNText) => {
        allLinks.push({
          href: linkNText.split('](')[1].slice(0, -1),
          text: linkNText.split('](')[0].slice(1),
          file: md,
        });
      });
    }
  });
  return allLinks;
};

const linkStatus = (obj) => fetch(obj.href).then((res) => {
  const response = {
    href: obj.href,
    text: obj.text,
    file: obj.file,
    status: res.status,
    message: res.status >= 200 && res.status < 300 ? 'ok' : 'fail',
  };
  return response;
})
  .catch((error) => new Error(error.message));

module.exports = {
  pathExists,
  isAbsolute,
  relToAbs,
  isDirectory,
  isMd,
  getMd,
  getLinks,
  linkStatus,
};
