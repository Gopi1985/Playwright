const {test, expect} = require('@playwright/test');
test.only('Gopi First testcase', async ({browser})=>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://en.wikipedia.org/wiki/Ilaiyaraaja");
console.log(await page.title());
await expect(page).toHaveTitle("Ilaiyaraaja - Wikipedia");
});

test('Gopi Simple testcase', async ({page})=>
{
//const context = await browser.newContext();
//const page = await context.newPage();
await page.goto("https://myacl.acldigital.com/");
console.log(await page.title());
await page.locator('#userName').fill("sgopinath");
await page.locator("[type='password']").fill("Gopinath");
});
