const {
  pathExists, isAbsolute, relToAbs, isDirectory,
} = require('../index');

describe('pathExists', () => {
  it('la ruta no existe', () => {
    const path = '/package-lock.json';
    expect(pathExists(path)).toBe(false);
  });
});

describe('isAbsolute', () => {
  it('la ruta no es absoluta', () => {
    const path = 'package-lock.json';
    expect(isAbsolute(path)).toBe(false);
  });
});

describe('relToAbs', () => {
  it('convierte la ruta a absoluta', () => {
    const path = '.eslintrc.js';
    expect(relToAbs(path)).toBe('/Users/luva/Laboratoria/Md Links/LIM015-md-links/.eslintrc.js');
  });
});

describe('isDirectory', () => {
  it('es un directorio', () => {
    const path = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/test';
    expect(isDirectory(path)).toBe(true);
  });
});

/* const mdLinks = require('../index.js');

describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});
*/
