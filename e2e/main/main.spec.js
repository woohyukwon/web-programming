let config = browser.params;
import {MainPage} from './main.po';

describe('Main View', function() {
    let page;

    beforeEach(() => {
        return browser.get(`${config.baseUrl}/`).then(() => {
            page = new MainPage();
        });
    });

    xit('should include header with correct title', function() {
        expect(page.pageHeader.getText()).to.eventually.equal('Lab 17 - Automated Testing');
    });
});
