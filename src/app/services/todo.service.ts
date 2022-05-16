import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../models/todo';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  list(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.baseUrl}/api/todos`);
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${environment.baseUrl}/api/todos`, todo);
  }

  changeClosedTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${environment.baseUrl}/api/todos/${todo.id}`, todo);
  }
}
