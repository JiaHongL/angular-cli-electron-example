import { JhlToolsPage } from './app.po';

describe('jhl-tools App', () => {
  let page: JhlToolsPage;

  beforeEach(() => {
    page = new JhlToolsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
