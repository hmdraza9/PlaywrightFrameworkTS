import { test as base } from '@playwright/test'

export type TestOptions = {
    globalUrlQA:string
    gotoINDOTCOMPage:string
}

export const test = base.extend<TestOptions>({
    globalUrlQA:['', {option:true}],

    gotoINDOTCOMPage:async({page}, use) => {
        await page.goto('https://www.netflix.com/')
        const titleNF = page.title
        console.log(titleNF)
        await use('')
    }
})
