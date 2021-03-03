import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Todo} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class MockTodoApi implements InMemoryDbService {

  createDb(): {} {
    const todos: Todo[] = [
      { title: 'todo in memory 1', isClosed: false },
      { title: 'todo in memory 2', isClosed: false },
      { title: 'todo in memory 3', isClosed: true },
      { title: 'todo in memory 4', isClosed: false },
    ];
    return { todos };
  }

}
