const {test, expect} = require('@playwright/test');


test.only('Login', async ({page})=>
{
await page.goto("https://rahulshettyacademy.com/client/");
await page.locator(".text-reset").click();
await page.locator("#firstName").fill("gopinath");
await page.locator("#lastName").fill("S");
await page.locator("#userEmail").fill("sgopinath@testmail.com");
await page.locator("#userMobile").fill("9000099999");
await page.locator(".custom-select ng-pristine ng-valid ng-touched").fill("Doctor");
await page.locator("#userMobile").fill("9000099999");









});
