import { ExamAppPage } from './app.po';

describe('exam-app App', function() {
  let page: ExamAppPage;

  beforeEach(() => {
    page = new ExamAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
