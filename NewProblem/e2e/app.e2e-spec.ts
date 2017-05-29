import { NewProblemPage } from './app.po';

describe('new-problem App', () => {
  let page: NewProblemPage;

  beforeEach(() => {
    page = new NewProblemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
