import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { LanguageFormat } from 'src/app/models/date';
import { Todo } from '../../models/todo';
import { selectSelectedTodo } from '../../store/selectors';

@Component({
  selector: 'app-todo-description',
  templateUrl: './todo-description.component.html',
  styleUrls: ['./todo-description.component.scss']
})
export class TodoDescriptionComponent implements OnInit {
  public todo$: Observable<Todo | undefined> = of(undefined);
  public languageFormat = LanguageFormat;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap?.get('id') ?? '';
    this.todo$ = this.store.select(selectSelectedTodo(+id));
  }

}
