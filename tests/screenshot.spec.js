
import { test, expect,date } from '@playwright/test';


test('Autowait2',async({page})=>{
//test.slow()  - //Marks a test as "slow". Slow test will be given triple the default timeout.

await page.goto('https://demowebshop.tricentis.com/login')

await page.screenshot({path: 'Screenshots/homepage.png'})
// locator.screenshots

await page.locator('.header-logo').screenshot({path: 'Screenshots/homepage.png'})
//toHaveScreenshots()

const timeStamp = Date.now()
await page.locator('.header-logo').screenshot({
path: `Screenshots/homepage${timeStamp}.png`,
fullPage : true

})

// Automatic ss are configured in config file - the ss is taken at last step//
// Used in CI CD

// on the test page the ss can be taken in middle also

})