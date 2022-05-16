import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createTodo, createTodoFailed, createTodoSuccess, loadTodos, loadTodosFailed, loadTodosSuccess, changeClosedTodo, changeClosedSucess, changeCloseFailed } from './actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';

@Injectable()
export class Effects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      mergeMap(() =>
        this.todoService.list().pipe(
          map((todos) => loadTodosSuccess({ todos })),
          catchError(() => [loadTodosFailed()])
        )
      )
    )
  );

  changeClosedTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeClosedTodo),
      mergeMap(action =>
        this.todoService.changeClosedTodo(action.todo).pipe(
          map(_ => changeClosedSucess({ todo: action.todo })),
          catchError(() => [changeCloseFailed()])
        )
      )
    )
  );

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTodo),
      mergeMap(action =>
        this.todoService.createTodo(action.todo).pipe(
          map(todo => createTodoSuccess({ todo })),
          catchError(() => [createTodoFailed()])
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
