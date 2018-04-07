import AboutPage from '../page-objects/about.page';

describe('QAWorks about page', () => {

    before('Navigate to about page', () => {
      browser.url('/about-us/');
    });

    it('should render required elements', () => {
      expect(AboutPage.jobsPortal.isVisible()).to.be.true;
      expect(AboutPage.detailedCaseStudies.isVisible()).to.be.true;
    });

    it('should navigate to the detailed studies page', () => {
      AboutPage.detailedCaseStudies.click();
      var tabs = browser.windowHandles();
      var newTab = tabs.value.shift();
      browser.switchTab([newTab]);
      expect(browser.getUrl()).to.equal('http://www.qaworks.com/pdf/Media-Client-Case-Study-2017.pdf')
    });

});
