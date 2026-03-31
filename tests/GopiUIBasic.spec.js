const {test, expect} = require('@playwright/test');
test('Gopi First testcase', async ({browser})=>
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
const UserName = page.locator('#username');
const SignIn = page.locator("[type='submit']");
await UserName.fill("gopinath");
await page.locator('#password').fill("Dhiyarthkannnahealthland$1");
await SignIn.click();
await UserName.fill("");
await UserName.fill("sgopinath");
await SignIn.click();
});

test.only('Rahul testcase', async ({page})=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
const UserName = page.locator('#username');
const SignIn = page.locator("[type='submit']");
await UserName.fill("gopinath");
await page.locator('#password').fill("Learning@830$3mK2");
await SignIn.click();
await UserName.fill("");
await UserName.fill("rahulshettyacademy");
await SignIn.click();
console.log (await page.locator(".card-body a").nth(1).textContent());
console.log (await page.locator(".card-body a").first().textContent());
});
