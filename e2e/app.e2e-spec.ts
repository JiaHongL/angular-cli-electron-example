import { B2BPrototypePage } from './app.po';

describe('b2-b-prototype App', () => {
  let page: B2BPrototypePage;

  beforeEach(() => {
    page = new B2BPrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
