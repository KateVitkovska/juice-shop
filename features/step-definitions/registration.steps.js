import { Then } from '@wdio/cucumber-framework';


Then(/^I press log in$/, async (page) => {
    await pages[page].open()
});

