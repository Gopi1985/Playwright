await page.locator("#userEmail").fill("anshika@gmail.com");
await page.locator("#userPassword").fill("Iamking@123");
await page.locator("#login").click();
await page.waitForLoadState('networkidle');
await page.locator(".card-body b").first().waitFor();
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);