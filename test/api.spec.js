const fetch = require('../__mocks__/node-fetch');
const {
  pathExists, isAbsolute, relToAbs, isDirectory, isMd, mdInDir, getLinks, linkStatus
} = require('../api');

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

describe('isMd', () => {
  it('el archivo es md', () => {
    const path = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/.eslintrc.js';
    expect(isMd(path)).toBe(false);
  });
});

describe('mdInDir', () => {
  it('el directorio NO contiene archivos md', () => {
    const path = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/test';
    expect(mdInDir(path)).toEqual([]);
  });
  it('el directorio SÍ contiene archivos md', () => {
    const path = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz';
    expect(mdInDir(path)).toEqual(
      ['/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/otraCarpeta/nopuedeser.md',
        '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/otraCarpeta/selogró.md',
        '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md']
    );
  });
});

describe('getLinks', () => {
  it('No contiene links', () => {
    const path = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/otraCarpeta/nopuedeser.md';
    expect(getLinks(path)).toEqual([]);
  });
  it('Contiene links', () => {
    const path = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md';
    expect(getLinks(path)).toEqual([
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md'
      },
      {
        href: 'https://www.google.com/colores',
        text: 'Colores - link roto',
        file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md'
      },
    ]);
  });
});

const objOk = {
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md',
};
const response = [{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md',
  status: 200,
  message: 'ok',
}];
const responseFail = [{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md',
  status: 404,
  message: 'fail',
}];
const objFail = {
  href: 'https://es.wikdia.org/wiki/Markdown',
  text: 'Markdown',
  file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md',
};

describe('linkStatus', () => {
  it('El link está ok', () => {
    fetch.mockResolvedValue({ status: 200 });
    return linkStatus(objOk)
      .then((res) => {
      // console.log(res[0].message);
        expect(res).toEqual(response);
      })})
  it('El link está ok', () => {
    fetch.mockResolvedValue({ status: 404 });
    return linkStatus(objOk)
      .then((res) => {
        expect(res).toEqual(responseFail);
      });
  });
  it('Error', () => {
    fetch.mockRejectedValue(new Error('ERROR: request to https://es.wikdia.org/wiki/Markdown failed, reason: getaddrinfo ENOTFOUND es.wikdia.org'));
    return linkStatus(objFail).catch((err) => {
      expect(err).toBe('ERROR: request to https://es.wikdia.org/wiki/Markdown failed, reason: getaddrinfo ENOTFOUND es.wikdia.org')
    });
  });
});
