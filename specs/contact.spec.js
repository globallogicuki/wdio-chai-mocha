import ContactPage from '../page-objects/contact.page';

describe('QAWorks contact page', () => {
    before('Navigate to contact page', () => {
        browser.url('/contact-us/');
    });

    it.only('should show error message when required fields are not filled in', () => {
        browser.setValue(ContactPage.nameField, 'Xin')
        ContactPage.sendBtn.click();
        ContactPage.errorMsgs.waitForVisible();
        expect(ContactPage.errorMsgs.isVisible()).to.be.true;
    })
});
