class HomePage {
    get appMonitoring () { return $('li.active-branch> ul.hs-menu-children-wrapper > li:nth-child(2)'); } 
    get logo () { return $('.widget-span.widget-type-linked_image'); }
    get mainMenu () { return $('.custom-menu-primary'); }
    get menuItems () { return browser.elements('hs-menu-item hs-menu-depth-1 hs-item-has-children'); }
    get whatWedo () { return $('li.hs-menu-item.hs-menu-depth-1.hs-item-has-children > a'); }
}

export default new HomePage();