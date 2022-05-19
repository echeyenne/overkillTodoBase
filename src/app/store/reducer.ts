import {Todo} from '../models/todo';
import {createReducer, on} from '@ngrx/store';
import * as TodoAction from './actions';

export const featureKey = 'todosStore';

export interface State {
  todos: Array<Todo>;
  closeTodoModalCreation: boolean;
}

export const initialState: State = {
  todos: [],
  closeTodoModalCreation: false
};

export const todosReducer = createReducer(
  initialState,
  on(
    TodoAction.loadTodosSuccess,
    (state, { todos }) => ({
      ...state,
      todos
    })
  ),
  on(
    TodoAction.changeClosedSucess,
    (state, { todo }) => ({
      ...state,
      todos: [...state.todos.filter(elementT => elementT.id !== todo.id), todo]
    })
  ),
  on(
    TodoAction.createTodoSuccess,
    (state, { todo }) => ({
      ...state,
      todos: [todo, ...state.todos],
      closeTodoModalCreation: true
    })
  ),
  on(
    TodoAction.closeTodoModal,
    (state, { closeTodoModalCreation }) => ({
      ...state,
      closeTodoModalCreation
    })
  )
);


