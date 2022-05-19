import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { MatModule } from '../modules/mat.module';

import { TodoModalCreationComponent } from './todo-modal-creation.component';

describe('TodoModalCreationComponent', () => {
  let component: TodoModalCreationComponent;
  let fixture: ComponentFixture<TodoModalCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoModalCreationComponent ],
      imports: [ FormsModule, ReactiveFormsModule, MatModule, BrowserAnimationsModule ],
      providers: [provideMockStore()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoModalCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Have is required message on title field', () => {
    const todoForm = component.todoForm;
    todoForm.get('title')?.setValue('cc');
    fixture.detectChanges();
    todoForm.get('title')?.setValue('');
    expect(todoForm.get('title')?.getError('required')).toBeTruthy();
  });

  it('Have button disabled or not', () => {
    const todoForm = component.todoForm;
    const element = fixture.debugElement.nativeElement;
    const createTodoButton = element.querySelector('button');
    todoForm.get('title')?.setValue('cc');
    fixture.detectChanges();
    expect(createTodoButton.disabled).toBeFalse();
    todoForm.get('title')?.setValue('');
    todoForm.get('description')?.setValue('ssss');
    fixture.detectChanges();
    expect(createTodoButton.disabled).toBeTrue();
    todoForm.get('title')?.setValue('ddd');
    fixture.detectChanges();
    expect(createTodoButton.disabled).toBeFalse();
  });
});
