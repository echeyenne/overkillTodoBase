import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadTodos, loadTodosFailed, loadTodosSuccess } from './actions';
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

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
