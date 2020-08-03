const puppeteer = require('puppeteer');

module.exports = async function getPageText(url) {
  let browser = await puppeteer.launch();
  let page = await browser.newPage();

  await page.goto(url, {waitUntil: 'networkidle2'});
  let data = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, ul, li'), element => element.textContent)
  });

  return data.join(' ');
}