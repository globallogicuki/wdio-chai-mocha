class ContactPage {
    get errorMsgs () { return $('.wpcf7-not-valid-tip'); }
    get sendBtn () { return $('#contact-us-send'); }
    get nameField () { return '#qaworks-contact-us > p:nth-child(2) > label > span > input'; }

}

export default new ContactPage();
