const puppeteer = require('puppeteer');
const url = process.argv[2];
//Test
if (!url) {
    throw "Please provide URL as a first argument";
}
async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: 'screenshot.png'});
    browser.close();
    console.log("Generation Complete -- Screenshot.png");
}
run();
