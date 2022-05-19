import * as fromReducer from './reducer';
import { State } from './reducer';
import { createTodoSuccess, loadTodosSuccess } from './actions';
import { Todo } from '../models/todo';

describe('Reducer', () => {
  let initialState: fromReducer.State;
  describe('loadTodos', () => {
    beforeEach(() => {
        initialState = fromReducer.initialState;
    });
    it('should have all todos on state', () => {
      const newState: State = { todos:
        [{ id: 1, title: 'aTitle', description: 'test description', isClosed: false, updated: '2020-01-02' }],
        closeTodoModalCreation: false
      };
      const action = loadTodosSuccess({
        todos: [...newState.todos],
      });

      const state = fromReducer.todosReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('createTodo', () => {
    it('should have a new todo after the creation', () => {
      const todo: Todo = {id: 1, title: 'aTitle', description: 'test description', isClosed: false, updated: '2020-01-02'};
      const emptySate = { todos: [], closeTodoModalCreation: false};
      initialState = {...emptySate};
      const expectedState = {
        closeTodoModalCreation: true ,
        todos: [todo]
      };

      const action = createTodoSuccess({ todo });
      const state = fromReducer.todosReducer(initialState, action);

      expect(state).toEqual(expectedState);
      expect(state).not.toBe(emptySate);
    });
  });
});
