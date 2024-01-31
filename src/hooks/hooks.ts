import { BeforeAll,AfterAll } from "@cucumber/cucumber";
import {chromium,Page,Browser} from "@playwright/test";
import { pageFixture } from "./pageFixture";
let page:Page;
let browser:Browser;

BeforeAll(async function() {
    browser = await chromium.launch({ headless: false });
  page = await browser.newPage(); 
  pageFixture.page=page;    
  
})

AfterAll(async function() {
    await pageFixture.page.close();
    await browser.close();
})