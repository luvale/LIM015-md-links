const { linkStats, brokenLinks } = require('../src/stats');

const forLinkStats = [
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
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown otra vez',
    file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md',
  },
];

const forBrokenLinks = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md',
    status: 200,
    message: 'ok',
  },
  {
    href: 'https://www.google.com/colores',
    text: 'Colores - link roto',
    file: '/Users/luva/Laboratoria/Md Links/LIM015-md-links/carpetaFeliz/prueba.md',
    status: 404,
    message: 'fail',
  },
];

describe('linkStats', () => {
  it('Recibe un array con links y devuele el total de links y la cantidad de links únicos', () => {
    expect(linkStats(forLinkStats)).toBe('Total: 3 \nUnique: 2');
  });
});

describe('brokenLinks', () => {
  it('Recibe el array que retorna linksStatus() y retorna que fallaron', () => {
    expect(brokenLinks(forBrokenLinks)).toBe('Broken: 1');
  });
});
