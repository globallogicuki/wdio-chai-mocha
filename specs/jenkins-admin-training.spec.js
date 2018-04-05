// import JenkinsAdminTrainingPage from '../page-objects/jenkins-admin-training.page';
// import HomePage from '../page-objects/home.page';
//
// describe('Jenkins Admin Training', () => {
//     before('Navigate to base url', () => {
//         browser.url('/');
//     });
//
//     it('should land to Jenkins Admin Training page', () => {
//         HomePage.navigateToJenkinsAdmin();
//         expect(browser.getUrl()).to.equal('https://www.ecs-digital.co.uk/what-we-do/training/jenkins-admin');
//     });
//
//     it('should land on the Upcoming Course Dates page for Jenkins Training', () => {
//         HomePage.navigateToJenkinsAdmin();
//         JenkinsAdminTrainingPage.viewCourseBtn.waitForVisible();
//         JenkinsAdminTrainingPage.viewCourseBtn.click();
//         expect(JenkinsAdminTrainingPage.dateBtn.isVisible()).to.be.true;
//         expect(JenkinsAdminTrainingPage.dateBtn.getAttribute('title')).to.equal('28th Mar 2018');
//     });
// });
