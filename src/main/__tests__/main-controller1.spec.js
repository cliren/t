import MainController from '../main-controller';

describe('MainController', () => {
  let controller, scope;
  beforeEach(() => {
    scope = {};
    controller = new MainController(scope);
  });

  it('scope has two items', () => {
    let items = scope.items;

    expect(items.length).toBe(2);
  });
});