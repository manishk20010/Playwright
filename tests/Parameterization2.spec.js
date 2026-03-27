import { test, expect } from '@playwright/test';
import { loginTestData1 } from '../ParamFiles/param2'

for (const user of loginTestData1) {

    test(`test using plaintext.js - ${user.username}`, async ({ page }) => {

        await page.goto('https://www.demoblaze.com/');
       

        await page.locator('#login2').click()
        await page.locator('#loginusername').fill(user.username)
        await page.locator('#loginpassword').fill(user.password)
        await page.locator('//button[normalize-space()="Log in"]').click()
    })

}






