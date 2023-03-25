import { Given, When, Then } from '@wdio/cucumber-framework';

import Page from './page.ts';
import DashboardPage from '../../src/pageobjects/dashboard.page'

import '../../test.config'
const pages = {
    dashboard: DashboardPage
}


Given(/^I go to the "dashboard" page$/, async () => {
    await DashboardPage.open();
});