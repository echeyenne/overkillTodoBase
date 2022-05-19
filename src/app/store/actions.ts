import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

// load actions
const loadTodos = createAction('[Todos] Load todos');
const loadTodosSuccess = createAction(
  '[Todos] Load todos success',
  props<{ todos: Todo[] }>()
);
const loadTodosFailed = createAction('[Todos] Load todos failed');

// change closed actions
const changeClosedTodo = createAction(
  '[Todos] Change closed state todo',
  props<{todo: Todo}>()
);

const changeClosedSucess = createAction(
  '[Todos] Change closed state todo success',
  props<{todo: Todo}>()
);

const changeCloseFailed = createAction(
  '[Todos] Change closed state todo failed'
);
// create todo actions
const createTodo = createAction(
  '[Todos] create Todo',
  props<{todo: Todo}>()
);

const createTodoSuccess = createAction(
  '[Todos] create Todo success',
  props<{todo: Todo}>()
);

const createTodoFailed = createAction(
  '[Todos] create Todo failed'
);

// modal state
const closeTodoModal = createAction(
  '[Todos] change todo creation modal',
  props<{ closeTodoModalCreation: boolean }>()
);



export {
  loadTodos,
  loadTodosSuccess,
  loadTodosFailed,
  changeClosedTodo,
  createTodo,
  createTodoSuccess,
  createTodoFailed,
  closeTodoModal,
  changeClosedSucess,
  changeCloseFailed
};
