const linkStats = (array) => { // tiene que recibir el array que retorna getLinks()
  const totalLinks = array.length;
  const links = array.map((link) => link.href);
  const uniqueLinks = new Set(links);
  return `Total: ${totalLinks}
Unique: ${uniqueLinks.size}`;
};

const brokenLinks = (array) => {
  const linkMessages = array.filter((links) => links.message === 'fail');
  return `Broken: ${linkMessages.length}`;
};

module.exports = { linkStats, brokenLinks };
