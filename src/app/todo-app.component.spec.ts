import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TodoApp } from '../app/todo-app.component';

beforeEachProviders(() => [TodoApp]);

describe('App: Todo', () => {
  it('should create the app',
      inject([TodoApp], (app: TodoApp) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Todo App!\'',
      inject([TodoApp], (app: TodoApp) => {
    expect(app.title).toEqual('Todo App Works!');
  }));
});
