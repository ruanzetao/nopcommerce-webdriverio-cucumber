import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.ts';

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
    public open () {
        return super.open('dashboard');
    }
}

export default new DashboardPage();