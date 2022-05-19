import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { State } from '../../store/reducer';
import { selectTodos } from '../../store/selectors';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MockedComponent} from 'ng-mocks';
import { By } from '@angular/platform-browser';
import { MatModule } from '../modules/mat.module';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let store: MockStore<State>;
  let mockTodosSelector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TodoListComponent
      ],
      imports: [MatModule, FormsModule],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;

    mockTodosSelector = store.overrideSelector(selectTodos, [
      { id: 1, title: 'todo 1', isClosed: false, description: 'ss',  updated: '2019-05-01' },
      { id: 2, title: 'todo 2', isClosed: false, description: 'ttt',  updated: '2020-05-01' },
    ]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a title', () => {
    const titleElement = fixture.debugElement.query(By.css('mat-card-title')).nativeElement.innerText;
    expect(titleElement).toEqual('Todos add_circle');
  });

  it('should display todos', () => {
    const todoElements = fixture.debugElement.queryAll(By.css('mat-list mat-list-item'));
    expect(todoElements.length).toEqual(2);
    expect(todoElements[0].query(By.css('.todo-title')).nativeElement.innerText).toContain('todo 1');
    expect(todoElements[1].query(By.css('.todo-title')).nativeElement.innerText).toContain('todo 2');
    const todoCheckboxes: MockedComponent<MatCheckbox>[] =
      todoElements.map(item => item.query(By.css('mat-checkbox'))).map(item => item.componentInstance);
    expect(todoCheckboxes[0].checked).toBeFalse();
    expect(todoCheckboxes[1].checked).toBeFalse();
  });
});
