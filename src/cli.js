#!/usr/bin/env node
/* eslint-disable no-console */
const chalk = require('chalk');
const { mdLinks } = require('./mdLinks');
const { linkStats, brokenLinks } = require('./stats');
const { help } = require('./messages');

const userPath = process.argv[2];
const options = process.argv.slice(3);
const validate = options.includes('--validate');
const stats = options.includes('--stats');
const noPath = userPath === '--help' || userPath === '--validate' || userPath === '--stats';
// console.log(options);
// console.log(validate);

if (noPath) {
  console.log(chalk.cyan(help));
} else if (options.length === 0 && userPath) {
  // console.log('no hay options');
  mdLinks(userPath, { validate: false })
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(chalk.red(reject))); // redBright
} else if (validate && !stats) { // solo --validate
  // console.log('solo validate');
  mdLinks(userPath, { validate: true })
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(chalk.red(reject)));
} else if (stats && !validate) { // solo --stats
  // console.log('solo stats');
  mdLinks(userPath, { validate: false })
    .then((resolve) => console.log(chalk.bgGreen.black(linkStats(resolve))))
    .catch((reject) => console.log(chalk.red(reject)));
} else if (validate && stats) {
  // console.log('validate y stats');
  mdLinks(userPath, { validate: true })
    .then((resolve) => {
      const total = console.log(chalk.bgGreen.black(linkStats(resolve)));
      const broken = console.log(chalk.bgRed.black(brokenLinks(resolve)));
      return total && broken;
    })
    .catch((reject) => console.log(chalk.red(reject)));
} else {
  console.log(chalk.cyan(help));
}

/* PATHS para probar
const elReadMe = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/README.md';
const unJs = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/src/api.js';
const sinMd = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaSinMd';
*/
// const conMd = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz';
