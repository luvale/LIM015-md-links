const stats = (array) => { // tiene que recibir el array que retorna getLinks()
  const totalLinks = array.length;
  const links = array.map((link) => link.href);
  const uniqueLinks = new Set(links);
  return `Total: ${totalLinks} 
Unique: ${uniqueLinks.size}`;
};

const arraay = [
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
console.log(stats(arraay));
