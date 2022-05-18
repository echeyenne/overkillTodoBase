import { async, ComponentFixture, inject, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TodoListComponent } from '../todo-list/todo-list.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HeaderComponent, TodoListComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a app title', () => {
    const element: HTMLElement = fixture.debugElement.nativeElement;
    expect(element.querySelector('a')?.textContent).toBe('Overkill Todo App');
  });
  it('should have a home link', () => {
    const href = fixture.debugElement.query(By.css('a')).nativeElement.getAttribute('ng-reflect-router-link');
    fixture.detectChanges();
    expect(href).toEqual('/')
  });
});
