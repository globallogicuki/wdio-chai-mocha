class HomePage {
    get logo () { return $('.fusion-standard-logo'); }
    get mainMenu () { return $('.fusion-main-menu'); }
    get menuItems () { return browser.elements('#menu-qaworks-menu-general'); }
    get services () { return $('#menu-item-18924'); }
    get testAutomation() { return $('a[href="//www.qaworks.com/test-automation/"]');}

    navigateToTestAutomation () {
        this.services.click();
        this.testAutomation.waitForVisible();
        this.testAutomation.click();
    }


}

export default new HomePage();
