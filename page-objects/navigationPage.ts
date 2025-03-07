import { Page } from "@playwright/test"

export class NavigationPage {

    readonly page : Page

    constructor(page : Page){
        this.page = page;
    }

    async printTexts(){
        const welcomeText = await this.page.locator('//h4[text()="Playground"]/following-sibling::*/span').textContent()
        console.log(welcomeText)
    }
}