import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Todo, TodoDb} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class MockTodoApi implements InMemoryDbService {
  private todos: Todo[] = [
    { id: 1, title: 'todo in memory 1', description: 'description du todo 1', updated: '2019-01-03', isClosed: false },
    { id: 2, title: 'todo in memory 2', description: 'description du todo 1', updated: '2021-02-03', isClosed: false },
    { id: 3, title: 'todo in memory 3', description: 'description du todo 1', updated: '2022-05-02', isClosed: false },
    { id: 4, title: 'todo in memory 4', description: 'description du todo 1', updated: '2021-01-15', isClosed: false },
  ];
  createDb(): TodoDb {
    return { todos: this.todos };
  }

}
