class HomePage {
    get logo () { return $('.fusion-standard-logo'); }
    get mainMenu () { return $('.fusion-main-menu'); }
    get menuItems () { return browser.elements('#menu-qaworks-menu-general'); }
    get services () { return $('#menu-item-18924'); }
    get aboutUs() { return $('#menu-item-19864');}

}

export default new HomePage();
