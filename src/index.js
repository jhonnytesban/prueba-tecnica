const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({headless: false});
  // Create pages, interact with UI elements, assert values
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto('https://web.gencat.cat/ca/inici')

  await browser.close();
})();