import * as fromReducer from './reducer';
import {selectTodos, selectSelectedTodo, getCloseTodoModalCreation } from './selectors';

describe('Selectors', () => {
  let initialState: fromReducer.State
  beforeEach(() => {
    initialState = fromReducer.initialState;
  })
  it('should select todos list', () => {
    const result = selectTodos.projector(initialState);
    expect(result).toEqual(initialState.todos);
  });
  it('should select one todo', () => {
    initialState = { 
      todos: 
      [
        { id: 1, title: 'aTitle', description:'test description', isClosed: false, updated: '2020-01-02' },
        { id: 2, title: 'aTitle2', description:'test description2', isClosed: false, updated: '2020-10-01' }
      ], 
      closeTodoModalCreation: false 
    };
    const firstTodo = initialState.todos.find(todo => todo.id === 1);
    const result = selectSelectedTodo(1).projector(initialState.todos);
    expect(result).toEqual(firstTodo);
  });
  it('should select one todo', () => {
    initialState = { 
      todos: 
      [
        { id: 1, title: 'aTitle', description:'test description', isClosed: false, updated: '2020-01-02' },
        { id: 2, title: 'aTitle2', description:'test description2', isClosed: false, updated: '2020-10-01' }
      ], 
      closeTodoModalCreation: false 
    };
    const result = getCloseTodoModalCreation.projector(initialState);
    expect(result).toEqual(initialState.closeTodoModalCreation);
  })
});
