// Create a Class - Constructor - Methods
//URL Launch
// Click Login Element
//Admintest3321 / Admin
// Click User Name
// Click Password
// Click Login button

import { Locator, Page } from "@playwright/test"

export class Login_Page {
  page: Page
  loginLink: Locator
  username: Locator
  password: Locator
  loginbtn: Locator

  constructor(page: Page) {
    this.page = page
    this.loginLink = '#login2'
    this.username = '#loginusername'
    this.password = '#loginpassword'
    this.loginbtn = '//button[normalize-space()="Log in"]'
  }

  async navigate() {

    await this.page.goto('https://www.demoblaze.com/')

  }

  async goToLoginPage(username: string, password: string) {

    await this.page.locator(this.loginLink).click()
    await this.page.locator(this.username).fill(username)
    await this.page.locator(this.password).fill(password)
    await this.page.locator(this.loginbtn).click()
    
  }



}

// await page.goto('https://example.com', {
//   timeout: 60000,        // 60 seconds
//   waitUntil: 'load'      // or 'domcontentloaded' / 'networkidle'
// });