import HomePage from '../page-objects/home.page';

describe('ECS Digital homepage', () => {

    before('Navigate to home page', () => {
        browser.url('/');
    });

    it('should render required elements', () => {
        expect(HomePage.logo.isVisible()).to.be.true;
        expect(HomePage.mainMenu.isVisible()).to.be.true;
    });
    
    it('should navigate to what we do page', () => {
        HomePage.whatWedo.click();
        expect(browser.getUrl()).to.equal('https://www.ecs-digital.co.uk/what-we-do');
    });
    
    it('should navigate to application monitoring page', () => {
        HomePage.whatWedo.moveToObject();
        HomePage.appMonitoring.click();
        expect(browser.getUrl()).to.equal('https://www.ecs-digital.co.uk/what-we-do/application-monitoring');
    });
});       