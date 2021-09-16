module.exports = () => {
  // ...
};

// File System
const fs = require('fs');
const path = require('path');

const practice = 'package-lock.json';
const pathExists = (p) => fs.existsSync(p);

const isAbsolute = (p) => path.isAbsolute(p);

// console.log(pathExists(practice));
console.log(isAbsolute(practice));
