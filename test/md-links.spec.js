const { pathExists, isAbsolute } = require('../index');

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

/* const mdLinks = require('../index.js');

describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});
*/
