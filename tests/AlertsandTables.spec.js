import {test} from '@playwright/test'



test('Alerts Test',async ({page})=>{

await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')
await page.screenshot({ path: 'viewport.png' });





})