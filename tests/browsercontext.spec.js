
import { test, expect } from '@playwright/test'

test('Validate LOGO', async ({ page }) => {

    await page.goto('https://orangehrm.com/')
    //await page.getByRole('link',{name:'OrangeHRM Logo'}).
    const logo = page.locator('nav div a.navbar-brand.nav-logo')

    await expect(logo).toBeVisible()
    await logo.screenshot({ path: 'Manish.png' })

})