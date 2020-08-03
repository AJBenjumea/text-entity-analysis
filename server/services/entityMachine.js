const getPageText = require('../utils/scraper');
const getEntities = require('../api/googleEntity');

module.exports = async function entityMachine(urlA, urlB) {
  let textA = await getPageText(urlA);
  let textB = await getPageText(urlB);

  let resultsA = await getEntities(textA);
  let resultsB = await getEntities(textB);

  return [resultsA.entities, resultsB.entities];
}