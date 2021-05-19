const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({headless: false, slowMo: 50});
  // Create pages, interact with UI elements, assert values
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto('https://web.gencat.cat/ca/inici')

  const cadena = 'agenda'

  //Para hacer clic
  await page.press('#cercadorOcultGoogle', 'a', {delay: 500});
  await page.press('#cercadorOcultGoogle', 'g', {delay: 500});
  await page.press('#cercadorOcultGoogle', 'e', {delay: 500});
  await page.press('#cercadorOcultGoogle', 'n', {delay: 500});
  await page.press('#cercadorOcultGoogle', 'd', {delay: 500});
  await page.press('#cercadorOcultGoogle', 'a', {delay: 500});
  await page.press('#cercadorOcultGoogle', ' ', {delay: 500});
  await page.press('#cercadorOcultGoogle', 'c', {delay: 500});
  await page.press('#cercadorOcultGoogle', 'u', {delay: 500});
  await page.press('#cercadorOcultGoogle', 'l', {delay: 500});
  await page.press('#cercadorOcultGoogle', 't', {delay: 500});
  await page.press('#cercadorOcultGoogle', 'u', {delay: 500});
  await page.press('#cercadorOcultGoogle', 'r', {delay: 500});
  await page.press('#cercadorOcultGoogle', 'a', {delay: 500});
  await page.press('#cercadorOcultGoogle', 'l', {delay: 500});

  await browser.close();
})();