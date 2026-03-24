import { test, expect } from '@playwright/test';

//import data from '../ParamFiles/param3.json'
const logintestdata2 = require('../ParamFiles/param3.json')


for (const user of logintestdata2) {
 
    test(`Tests using json file - ${user.username}`,async({page})=>{

    await page.goto('https://www.demoblaze.com/');

    await page.locator('#login2').click()
    await page.locator('#loginusername').fill(user.username)
    await page.locator('#loginpassword').fill(user.password)
    await page.locator('//button[normalize-space()="Log in"]').click()
    })

 }
