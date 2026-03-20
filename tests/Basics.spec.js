const {test} = require('@playwright/test');
test('Testcase NAme', async ({browser}) => 
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://myacl.acldigital.com/layout/timeline-layout/");
console.log(await page.title());
}


);