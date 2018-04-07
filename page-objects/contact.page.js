class ContactPage {
    get errorMsgs () { return $('.wpcf7-not-valid-tip'); }
    get sendBtn () { return $('#contact-us-send'); }
    get nameField () { return '.wpcf7-form-control.wpcf7-text.wpcf7-validates-as-required'; }

}

export default new ContactPage();
