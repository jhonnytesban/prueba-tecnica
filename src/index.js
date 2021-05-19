const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({headless: false, slowMo: 50});
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto('https://web.gencat.cat/ca/inici')


  await page.type('#cercadorOcultGoogle', 'agenda cultural', {delay: 250});
  await page.click('[aria-label="Cercar"]', {delay: 500})
  await page.type('#cercadorOcultGoogle', 'Prueba terminada', {delay: 100});

  await browser.close();
})();