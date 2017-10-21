import { PlateItPage } from './app.po';

describe('plate-it App', function() {
  let page: PlateItPage;

  beforeEach(() => {
    page = new PlateItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
