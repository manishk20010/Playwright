import { test } from '@playwright/test'

test('Select source city', async ({ page }) => {
    test.setTimeout(60000); // increase test timeout
    await page.goto('https://www.redbus.in/');
    const myLocator = await page.locator('div').filter({ hasText: /^From$/ }).nth(1)
    myLocator.click()

});

