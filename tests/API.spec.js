import {test} from '@playwright/test'

test('API GET',async ({request})=>{

//https://conduit.bondaracademy.com/


await request.get('https://conduit-api.bondaracademy.com/api/articles?tag=Bondar%20Academy&limit=10&offset=0'
)


})