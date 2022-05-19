import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { MatModule } from 'src/app/components/modules/mat.module';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';
import { TodoDescriptionComponent } from './todo-description.component';

describe('TodoDescriptionComponent', () => {
  let component: TodoDescriptionComponent;
  let fixture: ComponentFixture<TodoDescriptionComponent>;

  const initialState = {
    todosStore: {
      todos: [
        { id: 1, title: 'todo in memory 1', description: 'description du todo 1', updated: '2019-01-03', isClosed: false },
        { id: 2, title: 'todo in memory 2', description: 'description du todo 2', updated: '2021-02-03', isClosed: false },
        { id: 3, title: 'todo in memory 3', description: 'description du todo 3', updated: '2022-05-02', isClosed: false },
      ]
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatModule, RouterTestingModule],
      declarations: [TodoDescriptionComponent, DateFormatPipe],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: '3' })
            }
          }
        }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(TodoDescriptionComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display todo title', () => {
    const element: HTMLElement = fixture.debugElement.nativeElement;
    expect(element.querySelector('mat-card-title')?.textContent).toContain(' todo in memory 3 mood_badhome');
  });

  it('should display todo description', () => {
    const element: HTMLElement = fixture.debugElement.nativeElement;
    expect(element.querySelector('mat-card-content')?.textContent).toContain(' description du todo 3 ');
  });
});
