const fetch = require('../__mocks__/node-fetch');
const {
  pathExists, isAbsolute, relToAbs, isDirectory, isMd, getMd, getLinks, linkStatus,
} = require('../src/api');

describe('pathExists', () => {
  it('Comprueba que la ruta no existe', () => {
    const path = '/package-lock.json';
    expect(pathExists(path)).toBe(false);
  });
});

describe('isAbsolute', () => {
  it('Comprueba que la ruta no es absoluta', () => {
    const path = 'package-lock.json';
    expect(isAbsolute(path)).toBe(false);
  });
});

describe('relToAbs', () => {
  it('Convierte una ruta relativa a absoluta', () => {
    const path = '.eslintrc.js';
    expect(relToAbs(path)).toBe('/Users/luva/Laboratoria/Md Links/LIM015-md-links/.eslintrc.js');
  });
});

describe('isDirectory', () => {
  it('Comprueba que la ruta sea de un directorio', () => {
    const path = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/test';
    expect(isDirectory(path)).toBe(true);
  });
});

describe('isMd', () => {
  it('Comprueba que el archivo sea md', () => {
    const path = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/.eslintrc.js';
    expect(isMd(path)).toBe(false);
  });
});

describe('getMd', () => {
  it('Recibe un directorio que NO contiene archivos md', () => {
    const path = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/test';
    expect(getMd(path)).toEqual([]);
  });
  it('Recibe un directorio que SÍ contiene archivos md', () => {
    const path = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz';
    expect(getMd(path)).toEqual(
      ['/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/otraCarpeta/nopuedeser.md',
        '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/otraCarpeta/selogró.md',
        '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md'],
    );
  });
  it('Recibe un archivo que NO es md', () => {
    const unJs = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/src/api.js';
    expect(getMd(unJs)).toEqual([]);
  });
  it('Recibe un archivo que SÍ es md', () => {
    const unMd = '/Users/luva/Laboratoria/Md Links/LIM015-md-links/README.md';
    expect(getMd(unMd)).toEqual(['/Users/luva/Laboratoria/Md Links/LIM015-md-links/README.md']);
  });
});

describe('getLinks', () => {
  it('Devuelve un array vacío si NO hay links', () => {
    const path = ['/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/otraCarpeta/nopuedeser.md'];
    expect(getLinks(path)).toEqual([]);
  });
  it('Devuelve en un array de objetos el href, text y file de los links', () => {
    const path = ['/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md'];
    expect(getLinks(path)).toEqual([
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md',
      },
      {
        href: 'https://www.google.com/colores',
        text: 'Colores - link roto',
        file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md',
      },
    ]);
  });
});

const objOk = {
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md',
};
const response = {
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md',
  status: 200,
  message: 'ok',
};
const responseFail = {
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md',
  status: 404,
  message: 'fail',
};
const objFail = {
  href: 'https://es.wikdia.org/wiki/Markdown',
  text: 'Markdown',
  file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md',
};

describe('linkStatus', () => {
  it('Verifica el link y devuelve el status "200" y el message "ok"', () => {
    fetch.mockResolvedValue({ status: 200 });
    return linkStatus(objOk)
      .then((res) => {
      // console.log(res[0].message);
        expect(res).toEqual(response);
      })})
  it('Verifica el link y devuelve el status "404" y el message "fail"', () => {
    fetch.mockResolvedValue({ status: 404 });
    return linkStatus(objOk)
      .then((res) => {
        expect(res).toEqual(responseFail);
      });
  });
  it('Devuelve Error', () => {
    fetch.mockRejectedValue(new Error('ERROR: request to https://es.wikdia.org/wiki/Markdown failed, reason: getaddrinfo ENOTFOUND es.wikdia.org'));
    return linkStatus(objFail).catch((err) => {
      expect(err).toBe('ERROR: request to https://es.wikdia.org/wiki/Markdown failed, reason: getaddrinfo ENOTFOUND es.wikdia.org')
    });
  });
});
