/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

import App from '../resources/test-data/aut.json'
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    env:string;

    constructor(){
        this.env=TEST_ENVIRONMENT;
    }
    public open (path: string) {
        var url=App.applications.dev[this.env].host;
        return browser.url(url);
    }
}
