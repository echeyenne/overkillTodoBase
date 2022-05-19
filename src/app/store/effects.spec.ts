import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { Effects } from './effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { todosReducer } from './reducer';
import { TodoService } from '../services/todo.service';
import {  loadTodosSuccess, createTodoSuccess} from './actions';
import { Todo } from '../models/todo';
import { formatDate } from '../utils/date.utils';

describe('Effects', () => {
  let effects: Effects;
  let actions: Observable<Action>;
  let todoService: jasmine.SpyObj<TodoService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ todosStore: todosReducer })],
      providers: [
        Effects,
        provideMockActions(() => actions),
        {
          provide: TodoService,
          useValue: todoService,
        },
      ],
    });

    effects = TestBed.inject(Effects);
    todoService = jasmine.createSpyObj<TodoService>('TodoService', ['list', 'createTodo']);
  });

  describe('loadTodos$', () => {
    it('should dispatch loadTodoSuccess type action when success', () => {
      const todos: Todo[] = [
        { id: 1, title: 'todo in memory 1', description: 'description du todo 1', updated: '2019-01-03', isClosed: false },
        { id: 2, title: 'todo in memory 2', description: 'description du todo 2', updated: '2021-02-03', isClosed: false },
        { id: 3, title: 'todo in memory 3', description: 'description du todo 3', updated: '2022-05-02', isClosed: false }
      ];
      actions = of({ type: loadTodosSuccess.type, todos });
      todoService.list.and.returnValue(of(todos));

      effects.loadTodos$.subscribe(action => {
        expect(action).toEqual({ type: loadTodosSuccess.type, todos });
      });
    });
  });

  describe('createTodo', () => {
    it('should dispatch createTodoSuccess type action when success', () => {
      const todo: Todo = {
        id: Math.floor(Math.random() * 100_000), title: 'test', description: '', updated: formatDate({ date: new Date() }), isClosed: false
      };
      actions = of({ type: createTodoSuccess.type, todo });
      todoService.createTodo.and.returnValue(of(todo));

      effects.createTodo$.subscribe(action => {
        expect(action).toEqual({ type: createTodoSuccess.type, todo });
      });

    });
  });
});
