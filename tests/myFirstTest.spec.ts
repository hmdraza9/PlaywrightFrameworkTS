import {test, expect} from '@playwright/test'


test.beforeAll(async({}) => {
    console.log('Before all executed.')
})

test.afterAll(async({}) => {
    console.log('After all executed.')
})

test.beforeEach(async ({page}) => {
    await page.goto('https://google.com')
    console.log('Before each executed.')
})

test.afterEach(async ({page}) => {
    console.log('After each executed.')
})

test.describe('Module - Web pages', () => {

test('Google page open', async ({page}) => {
    await page.goto('https://google.com')
})

})

test.describe('First module', () => {
    
    test.only('First test', async ({page}) => {
        const uiText = await page.locator('a[href^="https://about.google"]').textContent()
        console.log("uiText: >",uiText,"<")
        await expect(page.locator('a[href^="https://about.google"]')).toHaveText("About ")
        // expect.soft(uiText).toEqual("About ")
        await page.getByTitle('Search').fill("Playwright")
        await page.getByLabel("Google Search").first().click()
        await page.goto('https://testfiledownload.net/')
        await page.waitForTimeout(2222);
        await page.screenshot({ path: getTimestampedFilename() });
        console.log('Module 1, test 1')
    })
  
    test('Second test', async ({page}) => {
        const uiText = await page.locator('a[href*="https://store.google.com/IN"]').textContent()
        console.log("uiText: ",uiText)
        console.log('Module 1, test 2')
        test.slow()
        await page.goto('http://uitestingplayground.com/ajax')
        await page.getByRole('button', {name:'Button Triggering AJAX Request'}).click()
        const successlabel = page.locator('p.bg-success')
        await successlabel.waitFor({state: 'attached'})
        const successMsg = successlabel.textContent();
        console.log("successMsg: "+successMsg)
        await page.goto('http://uitestingplayground.com/autowait')
        const allHeaderAndFooterText = await page.locator('div.container').allTextContents()
        console.log("allHeaderAndFooterText: "+allHeaderAndFooterText)
        await page.goto("http://uitestingplayground.com/")
        const allHeaderText = await page.locator('div.container>div>div>h3>a').allTextContents()
        const allDescriText = await page.locator('//section[@id="overview"]//div[@class="container"]/div/div/p').allTextContents()

        // console.log("All headers: "+allHeaderText)
        // console.log("All descriptions: "+allDescriText)
        
        // console.log("Type of header list: "+typeof(allHeaderText))

        for(let header of allHeaderText){
            // console.log("Header: "+header)
        }

        for(let desc of allDescriText){
            // console.log("Description: "+desc)
        }


    })
  
    test('Third test', async ({page}) => {
        const uiText = await page.locator('a[href*="https://mail.google.com/mail/"][aria-label="Gmail "]').textContent()
        console.log("uiText: ",uiText)
        console.log('Module 1, test 3')
    })
    
})




test.describe('Second module', () => {
    
    test('First test', () => {
        console.log('Module 2, test 1')
    })
  
    test('Second test', () => {
        console.log('Module 2, test 2')
    })
  
    test('Third test', () => {
        console.log('Module 2, test 3')
    })
    
})




test.describe('Third module', () => {
    
    test('First test', () => {
        console.log('Module 3, test 1')
    })
  
    test('Second test', () => {
        console.log('Module 3, test 2')
    })
  
    test('Third test', () => {
        console.log('Module 3, test 3')
    })
    
})


function getTimestampedFilename(baseName = 'screenshot') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `Screenshots/${baseName}-${timestamp}.png`;
}