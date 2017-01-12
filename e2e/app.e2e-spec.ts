import { DapSpotifyPage } from './app.po';

describe('dap-spotify App', function() {
  let page: DapSpotifyPage;

  beforeEach(() => {
    page = new DapSpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
