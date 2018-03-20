class HomePage {
    get appMonitoring () { return $('li.active-branch> ul.hs-menu-children-wrapper > li:nth-child(2)'); } 
    get logo () { return $('.widget-span.widget-type-linked_image'); }
    get mainMenu () { return $('.custom-menu-primary'); }
    get menuItems () { return browser.elements('hs-menu-item hs-menu-depth-1 hs-item-has-children'); }
    get whatWedo () { return $('li.hs-menu-item.hs-menu-depth-1.hs-item-has-children > a'); }
    get devOpsTraining () { return $('a[href="//www.ecs-digital.co.uk/what-we-do/training"]')}
    get jenkins () { return $('li.hs-menu-depth-3:nth-child(3)'); }
    get jenkinsAdmin () { return $('a[href="//www.ecs-digital.co.uk/what-we-do/training/jenkins-admin"]');}

    navigateToJenkinsAdmin () {
        this.whatWedo.moveToObject();
        this.devOpsTraining.waitForVisible();
        this.devOpsTraining.moveToObject();
        this.jenkins.waitForVisible();
        this.jenkins.moveToObject();
        this.jenkinsAdmin.waitForVisible();
        this.jenkinsAdmin.moveToObject();
        this.jenkinsAdmin.click();
    }
}

export default new HomePage();