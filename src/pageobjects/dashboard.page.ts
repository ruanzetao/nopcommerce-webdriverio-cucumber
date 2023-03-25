import { ChainablePromiseElement } from 'webdriverio';

import Page from '../pageobjects/page';

class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    /**
     * overwrite specific options to adapt it to page object
     */
    public open():Promise<string> {
        return super.open('dashboard');
    }
}

export default new DashboardPage();