import { test, expect } from '@playwright/test';


const users1 = [
  { username: 'Admintest3321', password: 'admin' },
  { username: 'pavanol', password: 'test@123' }
];
 
 users1.forEach ((users1)=>{
 
    test(`Hello - ${users1.username}`,async({page})=>{

    await page.goto('https://www.demoblaze.com/');

    await page.locator('#login2').click()
    await page.locator('#loginusername').fill(users1.username)
    await page.locator('#loginpassword').fill(users1.password)
    await page.locator('//button[normalize-space()="Log in"]').click()
    })

 })






//   for (const user of users) {
//     test(`Login with ${user.username}`, async ({ page }) => {
//       const loginPage = new LoginPage(page);
//       await loginPage.gotoLoginPage();
//       await loginPage.login(user.username, user.password);
//     }
//     )