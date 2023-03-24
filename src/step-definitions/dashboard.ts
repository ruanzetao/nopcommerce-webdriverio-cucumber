import { Given, When, Then } from '@wdio/cucumber-framework';

import Page from './page.ts';

const pages = {
    dashboard: DashboardPage;
}

Given(/^I go to the (\w+) page of NopCommerce$/, async (page) => {
    await pages[page].open();
});