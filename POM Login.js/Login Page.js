// Create a Class - Constructor - Methods
 //URL Launch
// Click Login Element
//Admintest3321 / Admin
// Click User Name
// Click Password
// Click Login button

exports.Login_Page = class Login_Page{
   
    constructor(page){
      this.page = page
        this.loginLink = '#login2'
        this.username = '#loginusername'
         this.password = '#loginpassword'
        this.loginbtn = '//button[normalize-space()="Log in"]'
    } 
   
    async navigate(){
    timeout: 40000;
    //waitUntil: 'load';
    await this.page.goto('https://www.demoblaze.com/')

     }
     
     async goToLoginPage(username , password){

        await this.page.locator(this.loginLink).click()
        await this.page.locator(this.username).fill('username')
        await this.page.locator(this.password).fill('password')
        await this.page.locator(this.loginbtn).click()

     }



}

// await page.goto('https://example.com', {
//   timeout: 60000,        // 60 seconds
//   waitUntil: 'load'      // or 'domcontentloaded' / 'networkidle'
// });