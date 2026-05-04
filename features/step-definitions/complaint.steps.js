import { Then } from '@wdio/cucumber-framework';

Then(/^I type and send message "(.*?)"$/, async function (message) {
    // await this.pages.complaintPage.textAreaMessage.waitForDisplayed();
    // await this.pages.complaintPage.textAreaMessage.setValue(message);
    // await this.pages.complaintPage.buttonSubmit.waitForDisplayed();
    // await this.pages.complaintPage.buttonSubmit.click();
    console.log(message)
})

Then(/^I see confirmation message about "(.*?)"$/, async function (message) {
    // const element = await this.pages.complaintPage.confirmationTextArea;
    // await element.waitForDisplayed();
    // await expect(element).toHaveText(expect.stringContaining(message));
})

Then(/^I send following message$/, async function(message) {
   console.log(message);
})
