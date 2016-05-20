export class Ng2TestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-test-app h1')).getText();
  }
}
