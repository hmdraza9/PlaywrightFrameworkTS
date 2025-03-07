import { Page } from '@playwright/test'
import { HelperClass } from './utils/helperClass';
import { test } from '@playwright/test';

export class GooglePage extends HelperClass{


    constructor(page : Page){
        super(page)
    }


    async searchGoogle(keyWord: string){
        const projectType = test.info().project.name
        if (projectType=="mobile") {  // Adjust based on breakpoint
            console.log("Running on a mobile device");
            await this.page.locator('textarea[name="q"]').fill(keyWord)
        }
        else{
            console.log("Running on a desktop device");
            await this.page.getByTitle('Search').fill(keyWord)
        }

        await this.waitForSeconds(5)
    }

}