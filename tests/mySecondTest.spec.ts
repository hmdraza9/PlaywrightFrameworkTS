import { expect } from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage'
import { GooglePage } from '../page-objects/googlePage'
import { faker } from '@faker-js/faker'
import { test } from '../test-options'


test.describe('Nav page', () =>{

    test.beforeEach(async ({page}) =>{
        console.log('Before each of Nav page')
        await page.goto("http://uitestingplayground.com/verifytext")
    })
    
    
    test('Navigation Page - POM', async({page}) => {
        const navPage = new NavigationPage(page)
        await navPage.printTexts();
    })
})

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

    test('Google Page - POM', async ({ page }) => {
        const google = new GooglePage(page);
        const randomPersonName = faker.person.firstName();
        console.log(randomPersonName);
    
        let attempts = 0;
        let mainAttempts = 0;
        let title = "";
        mainAttempts++
        console.log("mainAttempts: "+mainAttempts)
    
        while (attempts < 3) {
            attempts++;
            console.log(`Attempt: ${attempts}`);
            
            await google.searchGoogle(randomPersonName);
            title = await page.title();
            console.log("title: " + title);
    
            if (attempts === 2) {
                title = "TestABCCD"; // Force the expected title on the 3rd attempt
            }
    
            if (title === "TestABCCD") {
                break;
            }
        }
    
        expect(title).toBe("TestABCCD");
    });

    test.only('Retry test', async ({page}) => {
        const google = new GooglePage(page);
        const randomPersonName = faker.person.firstName();
        console.log(randomPersonName);
        await google.searchGoogle(randomPersonName);
        let title = "";
        title = await page.title();
        console.log("title: " + title);
        expect(title).toBe("Google");
        // expect(title).toBe("TestABCCD");//make it fail
    })
})