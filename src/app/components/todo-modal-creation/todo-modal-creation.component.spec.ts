import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoModalCreationComponent } from './todo-modal-creation.component';

describe('TodoModalCreationComponent', () => {
  let component: TodoModalCreationComponent;
  let fixture: ComponentFixture<TodoModalCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoModalCreationComponent ]
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
});
