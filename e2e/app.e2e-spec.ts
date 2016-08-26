import { NgFireWebpackPage } from './app.po';

describe('ng-fire-webpack App', function() {
  let page: NgFireWebpackPage;

  beforeEach(() => {
    page = new NgFireWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
