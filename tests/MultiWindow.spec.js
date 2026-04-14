
import {test , expect} from '@playwright/test'

//https://opensource-demo.orangehrmlive.com/

test('Child Window',async({browser})=>{

          const context = await browser.newContext()
          const page = await context.newPage()
          await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          await expect(page).toHaveTitle('OrangeHRM')
          
          const bePrepared = context.waitForEvent('page')  // be prepared

          await page.getByRole('link',{name:'OrangeHRM, Inc'}).click()

         const childPage = await bePrepared

         console.log(await childPage.title());
         await expect(childPage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses ')

         page.bringToFront()
         await expect(page).toHaveTitle('OrangeHRM') //1st page
       //  childPage.bringToFront()
         await page.pause()         

          
        
})