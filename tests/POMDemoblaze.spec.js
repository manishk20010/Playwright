import { test, expect } from '@playwright/test';
import {Login_Page} from '../POM Login.js/Login Page'


test('Demo Blaze POM',async ({page})=>{

//create object//

const myPage = new Login_Page(page)
await myPage.navigate()
await myPage.goToLoginPage('Admintest3321','admin')
await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible({timeout: 6000})
   console.log('Login successful')

//class


})