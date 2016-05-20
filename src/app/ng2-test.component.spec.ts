import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2TestAppComponent } from '../app/ng2-test.component';

beforeEachProviders(() => [Ng2TestAppComponent]);

describe('App: Ng2Test', () => {
  it('should create the app',
      inject([Ng2TestAppComponent], (app: Ng2TestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-test works!\'',
      inject([Ng2TestAppComponent], (app: Ng2TestAppComponent) => {
    expect(app.title).toEqual('ng2-test works!');
  }));
});
