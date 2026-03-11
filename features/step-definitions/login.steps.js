import { Then } from '@wdio/cucumber-framework';


Given(/^I am on the login page$/, async (page) => {
    await pages[page].open()
});

