import {State} from './reducer';
import {selectTodos} from './selectors';

describe('Selectors', () => {
  const initialState: State = {
   todos: [
    { id: 1, title: 'todo in memory 1', description: 'description du todo 1', updated: '2019-01-03', isClosed: false },
    { id: 2, title: 'todo in memory 2', description: 'description du todo 2', updated: '2021-02-03', isClosed: false },
    { id: 3, title: 'todo in memory 3', description: 'description du todo 3', updated: '2022-05-02', isClosed: false }
   ],
   closeTodoModalCreation: false
  };

  it('should select todos list', () => {
    const result = selectTodos.projector(initialState);
    expect(result).toEqual(initialState.todos);
  });
});
