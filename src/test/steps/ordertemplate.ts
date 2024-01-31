import {Given,Then,When} from '@cucumber/cucumber';
import {chromium,Page,Browser} from "@playwright/test"
import { expect } from '@playwright/test';
import { assert, error } from 'console';
import { pageFixture } from '../../hooks/pageFixture';
    
    When('User navigate to the Order template page', async function () {
        await pageFixture.page.waitForLoadState('networkidle');
    });

    Then('User edits and saves the template', async function () {
        await pageFixture.page.click("//span[normalize-space()='Edit']")
        await pageFixture.page.waitForSelector('xpath=(//span[@class="body-sm cursor-pointer text-textcolor-primary"])', { state: 'visible' });
       await pageFixture.page.click('xpath=(//span[@class="body-sm cursor-pointer text-textcolor-primary"])') 
    });

    // Then('User verifies the template is saved', async function () {
    // });

    Then('User removes the selected products', async function () {
        await pageFixture.page.click("//span[normalize-space()='Remove selected products']");
        await pageFixture.page.click("//button[@type='submit']//span[@class='relative'][normalize-space()='Delete']")
    });

    // Then('User verifies the template is deleted', async function () {
    // });

    Then('user saves the template', async function () {
        await pageFixture.page.click("//span[normalize-space()='Save']")
        console.log("order template run finished")
      });
    