import {Then} from "@wdio/cucumber-framework"

Then(/^I open landing page$/, async function () {
    await browser.url('');
    await this.pages.basePage.buttonCloseWelcomeBanner.waitForDisplayed();
    await this.pages.basePage.buttonCloseWelcomeBanner.click();
    await this.pages.basePage.buttonDismissCookies.waitForDisplayed();
    await this.pages.basePage.buttonDismissCookies.click();
    await this.pages.basePage.snackBarLanguageChange.waitForExist({reverse: true});
})

Then(/^I press on Account button$/, async function () {
    await this.pages.basePage.buttonAccount.waitForDisplayed();
    await this.pages.basePage.buttonAccount.click();
})

Then(/^I am on login page$/, async function () {
    await this.pages.loginPage.waitForLoad();
})

Then(/^I press Login button$/, async function () {
    await this.pages.basePage.buttonLogin.waitForDisplayed();
    await this.pages.basePage.buttonLogin.click();
})

Then(/^I open side menu$/, async function () {
    await this.pages.basePage.buttonBurgerMenu.waitForDisplayed();
    await this.pages.basePage.buttonBurgerMenu.click();
})


Then(/^I open '(.*?)' side menu option$/, async function (option) {
    const elemet = await this.pages.basePage.sideMenu.sideMenuOption(option);
    await elemet.waitForDisplayed();
    await elemet.click();
})

Then(/^I see side menu options$/, async function (options) {
    for await(const option of options.raw()) {
        console.log(option);
        const elemet = await this.pages.basePage.sideMenu.sideMenuOption(option[0]);
        await elemet.waitForDisplayed();
    }
})

Then(/^I open shopping basket$/, async function () {
    await this.pages.basePage.buttonBasket.waitForDisplayed();
    await this.pages.basePage.buttonBasket.click();
})

