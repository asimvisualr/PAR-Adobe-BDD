import {Given,Then,When} from '@cucumber/cucumber';
import {chromium,Page,Browser} from "@playwright/test"
import { expect } from '@playwright/test';
import { assert, error } from 'console';
import { pageFixture } from '../../hooks/pageFixture';
// let browser:Browser;
// let page: Page;

Given('User is on the Login page',{ timeout: 10000 }, async function () {
  
  await pageFixture.page.goto("https://integration2-hohc4oi-3c6ufwa5rxeda.ap-3.magentosite.cloud/signin");
  await pageFixture.page.waitForLoadState();
  await expect(pageFixture.page.locator("//input[@placeholder='Ex: olivia@botti.com']")).toBeVisible();
  await pageFixture.page.waitForLoadState('networkidle');
});

Then('I should see the email input field', async function () {
  await expect(pageFixture.page.locator("//input[@placeholder='Ex: olivia@botti.com']")).toBeVisible();
});


Then('I should see the password input field', async function () {
  await expect(pageFixture.page.locator("//input[@placeholder='********************']")).toBeVisible();
});


Then('I should see the submit button', async function () {
  await expect(pageFixture.page.locator("//button[@type='submit']")).toBeVisible();

});


Given('User enter the username as {string}', async function (username) {
  await pageFixture.page.fill("//input[@placeholder='Ex: olivia@botti.com']", username);
});


Given('User enter the password as {string}', async function (string) {
  await pageFixture.page.fill("//input[@placeholder='********************']",string);
});


When('User click on the Login button', async function () {
  await pageFixture.page.click("//button[@type='submit']");
  await pageFixture.page.waitForLoadState('networkidle');

  // await browser.close();
});


Then('User should be able to login successfully', async function () {
});

Then('User should not be able to login successfully', async function () {
  await pageFixture.page.waitForTimeout(20000);
  await pageFixture.page.locator("//span[@class='text-textcolor-primary body-xs text-center warning-warningMessage-gg9']").isVisible();
  const errorText= await pageFixture.page.locator("//span[@class='text-textcolor-primary body-xs text-center warning-warningMessage-gg9']");
  const err= await errorText.textContent();
  expect(err).toContain("Incorrect username or password.");
  console.log(err);
});

       
 When('I enter a username without a password', async function () {
  await pageFixture.page.click('text=Login');
 });

 When('I try to login without entering any credentials', async function () {
  await pageFixture.page.click("//button[@type='submit']");
});
       
When('I enter a password without a username', async function (string) {
   await pageFixture.page.fill("//input[@placeholder='********************']",string);
   await pageFixture.page.click('text=Login');
});
       
 Then('I should see a login failure message', async function () {
  const errorText= await pageFixture.page.locator("//span[@class='text-textcolor-primary body-xs text-center warning-warningMessage-gg9']");
  const err= await errorText.textContent();
  expect(err).toContain("Incorrect username or password.");
  console.log(err);
});

When('I toggle the password visibility', async function () {
  const passwordField = pageFixture.page.locator("//input[@placeholder='********************']");
  await expect(passwordField).toHaveAttribute('type', 'password');
  await pageFixture.page.click("//div[@class='flex flex-col gap-y-4']//span[@class='pointer-events-none absolute right-3 z-foreground flex items-center justify-center']//*[name()='svg']");
  await expect(passwordField).toHaveAttribute('type', 'text');
});
       
Then('I should see a email validation message', async function () {
  const usernameValidation= await pageFixture.page.locator("//p[normalize-space()='Valid email or customer id is required.']");
  const usernameValidationText= await usernameValidation.textContent();
  expect(usernameValidationText).toContain("Valid email or customer id is required.");
  console.log('Text is'+usernameValidationText);
});

Then('I should see a username and password failure message', async function () {
  const usernameValidation= await pageFixture.page.locator("//p[normalize-space()='Valid email or customer id is required.']");
  const passwordeValidation= await pageFixture.page.locator("//p[normalize-space()='Password is required.']");
  const usernameValidationText= await usernameValidation.textContent();
  expect(usernameValidationText).toContain("Valid email or customer id is required.");
  const passwordValidationText= await passwordeValidation.textContent();
  expect(passwordValidationText).toContain("Password is required.");
});

Then('I should see a password validation message', async function () {
  const passwordeValidation= await pageFixture.page.locator("//p[normalize-space()='Password is required.']");
  const passwordValidationText= await passwordeValidation.textContent();
  expect(passwordValidationText).toContain("Password is required.");
  console.log('Text is'+passwordValidationText);
});