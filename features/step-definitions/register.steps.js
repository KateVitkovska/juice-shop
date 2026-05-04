import { Then } from '@wdio/cucumber-framework';
// import { faker } from "@faker-js/faker";

Then(/^I press not yet a customer$/, async function () {
    await this.pages.loginPage.linkRegister.waitForDisplayed();
    await this.pages.loginPage.linkRegister.click();
})

Then(/^I enter email address$/, async function () {
    await this.pages.registerPage.inputEmail.waitForDisplayed();
    this.user.email = `newmail${Date.now()}@mailinator.com`
    await this.pages.registerPage.inputEmail.setValue(this.user.email);
})

Then(/^I enter password$/, async function () {
    await this.pages.registerPage.inputPassword.waitForDisplayed();
    this.user.password = faker.internet.password();
    await this.pages.registerPage.inputPassword.setValue(this.user.password);
})

Then(/^I enter password repeatedly$/, async function () {
    await this.pages.registerPage.inputPasswordConfirm.waitForDisplayed();
    await this.pages.registerPage.inputPasswordConfirm.setValue(this.user.password);
})

Then(/^I select a question about elder sibling$/, async function () {
    await this.pages.registerPage.selectionSecurityQuestion.waitForDisplayed();
    await this.pages.registerPage.selectionSecurityQuestion.click();
    const optionElement = await this.pages.registerPage.securityQuestionOption("eldest siblings middle name");
    await optionElement.waitForDisplayed();
    await optionElement.click();
})

Then(/^I write answer$/, async function () {
    await this.pages.registerPage.inputAnswer.waitForDisplayed();
    await this.pages.registerPage.inputAnswer.setValue(this.user.password);
})

Then(/^I press register button$/, async function () {
    await this.pages.registerPage.buttonRegister.waitForDisplayed();
    await this.pages.registerPage.buttonRegister.click();
})
