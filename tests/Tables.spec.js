import {test , expect} from '@playwright/test'

test('Table1',async ({page})=>{
await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')

    const table =  page.locator('#productTable')
   //#productTable thead>tr>th - css
    //total number of rows and column
   const columns = table.locator ('thead>tr>th')
    console.log('columnscount',await columns.count())
    expect (await columns.count()).toBe(4) // generic
    await expect (column).toHaveCount(4)  //locator with autotry

    const rows =table.locator('tbody>tr')
    console.log('No of rows',await rows.count())

 }) // not for advanced
 



test('Table2 check box mark',async ({page})=>{
await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')

    const rows =  page.locator('#productTable tbody>tr')
    //use loop
    const rowsCount = await rows.count()
    

    for (let i=0;i<rowsCount;i++){

    //rows is giving all rows
    const row = rows.nth(i)
    const cellText = await row.locator('td').nth(1).innerText()
    if(cellText==='Tablet'){
      //await row.locator('td').nth(3).locator('input').check()
      await row.locator('input').check()
    }
    }
    await page.pause()
 })

