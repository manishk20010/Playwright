import { test, expect } from '@playwright/test'

test.describe('My Test Suit55', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')       
    })
    test('Text Fields', async ({ page }) => {
        
        const name = page.locator('#name')
        expect(name).toBeVisible
        expect(name).toBeEnabled
        await page.getByRole('textbox', { name: 'Name' }).fill('Manish')
        await page.getByRole('textbox', { name: 'Email' }).fill('Manish@gmail.com')
        await page.getByRole('textbox', { name: 'Phone' }).fill('876546464')
        await page.getByRole('textbox', { name: 'Address' }).fill('Tingrenagar')

    })
})