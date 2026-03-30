// Autowaiting is a powerful feature of PW which simplifies Test conditions by 
// automatically waiting for the right conditions before performing conditions

//Global Time out
// Action Time Out
// Navigation Time out
// Assertion Time Out
//Local Time out
// defaut Tim Out
import { test, expect } from '@playwright/test';

// Global and Local timeOut
test('Autowait',async({page})=>{
test.setTimeout(10_000) //per Test timeout - Prference ovrt Global set timeout

await page.goto('https://demowebshop.tricentis.com/login')

// await page.waitForTimeout(3000)  // not recommended
// await page.waitForTimeout(3000)
// await page.waitForTimeout(3000)


})

test('Autowait2',async({page})=>{
test.slow()  - //Marks a test as "slow". Slow test will be given triple the default timeout.

await page.goto('https://demowebshop.tricentis.com/login')

// await page.waitForTimeout(3000)  // not recommended
// await page.waitForTimeout(3000)
// await page.waitForTimeout(3000)


})

test('Assertions TimeOut ',async({page})=>{
//test.slow()  - //Marks a test as "slow". Slow test will be given triple the default timeout.

await page.goto('https://demowebshop.tricentis.com/login')

//Default timeout Assertions is 5s
await expect(page).toHaveTitle(/Demo Web Shop/)


await page.locator('#small-searchterms').fill('Laptop',{force:true})

})

// Timeouts//

