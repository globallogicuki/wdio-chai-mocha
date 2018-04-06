class HomePage {
    get logo () { return $('.fusion-standard-logo'); }
    get mainMenu () { return $('.fusion-main-menu'); }
    get menuItems () { return browser.elements('#menu-qaworks-menu-general'); }
    get services () { return $('#menu-item-18924'); }
    get testAutomation() { return $('a[href="//www.qaworks.com/test-automation/"]');}
    // get article() { return $('#post-25944')}
    // get readArticle() { return $('a[href="//www.qaworks.com/articles/qaworks-acquired-by-ecs-digital/"]');}

    navigateToTestAutomation () {
        this.services.click();
        this.testAutomation.waitForVisible();
        this.testAutomation.click();
    }


}

export default new HomePage();
