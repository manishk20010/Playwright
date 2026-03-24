
import { test, expect ,request} from '@playwright/test';
// import { request } from 'node:http';


test('Sign up-Multiple email addresses', async({page}) => {
    
  const email = await request.newContext()
  const inboxPrefix = 'test' + Date.now();

 const inboxResponse =  email.get(`https://rapidapi.com/startfu-startfu-default/api/inboxes-com/${inboxPrefix}`)

  const emailData = (await inboxResponse).json();
  console.log(emailData);



    await page.goto('https://www.demoblaze.com/');
   await page.locator('#signin2').click();
   await page.locator('#sign-username').fill(emailData);
   await page.locator('#sign-password').fill('admin');
   await page.getByRole('button', { name: 'Sign up' }).click();


})