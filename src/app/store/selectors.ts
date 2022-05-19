import {createFeatureSelector, createSelector } from '@ngrx/store';
import {featureKey, State} from './reducer';

export const getState = createFeatureSelector<State>(featureKey);

export const selectTodos = createSelector(
  getState,
  (state: State) => {
    const isClosedTodo = state.todos.filter(todo => todo.isClosed)
      .sort((curr, pre) => new Date(pre.updated).getTime() - new Date(curr.updated).getTime());
    const isNotClosedTodo = state.todos.filter(todo => !todo.isClosed);

    return [...isNotClosedTodo, ...isClosedTodo];
  },
);

export const selectSelectedTodo = (id: number) => createSelector(
  selectTodos,
  (todos) => todos.find(todo => todo.id === id)
);

export const getCloseTodoModalCreation = createSelector(
  getState,
  (state: State) => state.closeTodoModalCreation
);
