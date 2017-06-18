import { WorkTimeControlPage } from './app.po';

describe('work-time-control App', function() {
  let page: WorkTimeControlPage;

  beforeEach(() => {
    page = new WorkTimeControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
