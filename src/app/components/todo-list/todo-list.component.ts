import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from '../../models/todo';
import {Store} from '@ngrx/store';
import {getCloseTodoModalCreation, selectTodos} from '../../store/selectors';
import * as TodoAction from '../../store/actions';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoModalCreationComponent } from '../todo-modal-creation/todo-modal-creation.component';
import { formatDate } from 'src/app/utils/date.utils';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<ReadonlyArray<Todo>>;
  closeTodoModalCreation$: Observable<Readonly<boolean>>;

  constructor(private store: Store, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.todos$ = this.store.select(selectTodos);
    this.closeTodoModalCreation$ = this.store.select(getCloseTodoModalCreation);
  }

  ngOnInit(): void {
     this.store.dispatch(TodoAction.loadTodos());
  }

  changeCheckboxStatus(e: MatCheckboxChange, todo: Todo): void {
    const newTodo = {...todo, updated: formatDate({ date: new Date() }), isClosed: e.checked};
    this.store.dispatch(TodoAction.changeClosedTodo({todo: newTodo}));
  }

  openTodoDialogCreation(): void {
    const dialogRef = this.dialog.open(TodoModalCreationComponent, {
      width: '250px'
    });

    this.closeTodoModalCreation$.subscribe(closed => {
      if (closed) {
        dialogRef.close();
        this.store.dispatch(TodoAction.closeTodoModal({ closeTodoModalCreation: false }));
        this.snackBar.open(' Todo succesfully created ', 'close');
      }
    });
  }

}
