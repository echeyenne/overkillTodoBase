import {State} from './reducer';
import {selectTodos} from './selectors';

describe('Selectors', () => {
  const initialState: State = {
   todos: [
     {title: 'todo1Title', isClosed: true},
     {title: 'todo2Title', isClosed: false},
   ]
  };

  it('should select todos list', () => {
    const result = selectTodos.projector(initialState);
    expect(result).toEqual(initialState.todos);
  });
});
