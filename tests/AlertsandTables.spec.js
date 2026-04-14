import {test , expect} from '@playwright/test'

test('Alerts Test',async ({page})=>{
await page.goto('http://127.0.0.1:56005/practice-websites/automationpy.html')

 
//override the default Playwright behavior
//dialogue.accept or dialogue.dismiss
 page.on('dialog',async dialog=>{
 console.log(dialog.type())
 await dialog.accept()
 }) 
 
 await page.locator('#alertBtn').click()
 // I want to decide how to handle the alert .dialogue can handle all alerts.dialogue is an event//

})


test('Confirmation Alert@mk',async ({page})=>{
   await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')
   
    page.on('dialog',async dialog =>{
    //expect ( dialog.type()).toContain('confirm') //partial match
    expect ( dialog.type()).toContain('Press a button!') //partial match
    await dialog.accept({force:true})
    

       })
       
    await page.locator('#confirmBtn').click()
     
})



test('Prompt Alert@mk',async ({page})=>{
   await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')
   
   await page.on('dialog',async dialog =>{
    expect ( dialog.type()).toContain('Please enter your name:') //partial match
    expect ( dialog.type()).toContain('Harry Potter') //partial match
    await dialog.accept()
    
   })
    await page.locator('#promptBtn').click()

})