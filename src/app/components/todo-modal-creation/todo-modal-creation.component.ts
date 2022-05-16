import { formatDate } from '../../utils/date.utils';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ErrorInput, FormError, ValidInput } from '../../models/form.model';
import * as TodoAction from '../../store/actions';
import { LanguageFormat } from '../../models/date';

@Component({
  selector: 'app-todo-modal-creation',
  templateUrl: './todo-modal-creation.component.html',
  styleUrls: ['./todo-modal-creation.component.scss']
})
export class TodoModalCreationComponent {

  public todoForm: FormGroup;
  public FormErrorEnum = FormError;

  constructor(formBuilder: FormBuilder, private store: Store) {
    this.todoForm = formBuilder.group({
      title: ['', [Validators.required]],
      description: [''],
    });
  }

  validInput(options: ValidInput): boolean | undefined {
    const field = this.todoForm.get(options.name);
    return options.type === 'invalid'
    ? field?.invalid && field?.dirty
    : field?.valid && field?.dirty;
  }

  inputError(options: ErrorInput): boolean | undefined {
    return this.todoForm.get(options.fieldName)?.hasError(options.errorName);
  }

  createTodo(): void {
    const todoValueForm = {
      ...this.todoForm.value,
      id: Math.floor(Math.random() * 100_000),
      updated: formatDate({ type: LanguageFormat.EN, date: new Date() }),
      isClosed: false
    };

    this.store.dispatch(TodoAction.createTodo({todo: todoValueForm}));
  }

}
