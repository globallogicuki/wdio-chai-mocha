import HomePage from '../page-objects/home.page';

describe('QAWorks homepage', () => {

    before('Navigate to home page', () => {
        browser.url('/');
    });

    it('should render required elements', () => {
        expect(HomePage.logo.isVisible()).to.be.true;
        expect(HomePage.mainMenu.isVisible()).to.be.true;
    });

    it('should navigate to services page', () => {
        HomePage.services.click();
        expect(browser.getUrl()).to.equal('http://www.qaworks.com/about-us/#_ourservices');
    });

});
