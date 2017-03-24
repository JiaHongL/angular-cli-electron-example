import { AngularCliElectronExamplePage } from './app.po';

describe('angular-cli-electron-example App', () => {
  let page: AngularCliElectronExamplePage;

  beforeEach(() => {
    page = new AngularCliElectronExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
