import { Page } from '@playwright/test'

export class HelperClass{
    readonly page : Page

    constructor(page : Page){
        this.page = page
    }

    async waitForSeconds(timeInSeconds : number){
        await this.page.waitForTimeout(timeInSeconds*1000)
    }

}