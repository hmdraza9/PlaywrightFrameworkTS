import { expect } from '@playwright/test'
import { GooglePage } from '../page-objects/googlePage'
import { faker } from '@faker-js/faker'
import { test } from '../test-options'



test.describe('Google page', () => {
    
    test.beforeEach(async({page, globalUrlQA, gotoINDOTCOMPage}) => {
        gotoINDOTCOMPage
        console.log('Before each of Google page')
        console.log("globalUrlQA: "+globalUrlQA)
        await page.goto(globalUrlQA)
        await page.goto('/')
        const myBaseURL = test.info().project.use.baseURL; //accessing project>use>variables
        console.log("Base URL:", myBaseURL);
        const myBaseURLenv = process.env.baseURL; // accessing dotenv file data
        console.log("Base URL:", myBaseURLenv);
        console.log("process.env.orgName: "+process.env.orgName)
    })

    test('Retry test', async ({ page }) => {
        const google = new GooglePage(page);
        const randomPersonName = faker.person.firstName();
        console.log(randomPersonName);
        await google.searchGoogle(randomPersonName);
        let title = ""
        title = await page.title();  // Ensure 'await' is used correctly
        console.log("Title: " + title);
        expect(title).toBe("Google");
        // expect(title).toBe("TestABCCD");//make it fail
    })
})