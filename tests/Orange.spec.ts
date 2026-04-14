import { test, expect } from '@playwright/test'


test('child', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const [childPage] = await Promise.all([
        page.waitForEvent('popup'),
           page.getByRole('link', { name: 'OrangeHRM, Inc' }).click()
    ])
   
    await childPage.waitForLoadState()
    // Validate logo on child page
    const logo = childPage.getByRole('link', { name: 'Book a Free Demo' })
    await expect(logo).toBeVisible();


})