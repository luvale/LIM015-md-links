module.exports = () => {
  // ...
};

// File System
const fs = require('fs');

const path = '.eslintrc.js';
const pathExists = (p) => fs.existsSync(p);

console.log(pathExists(path));
