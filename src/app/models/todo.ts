interface Todo {
  id: number;
  title: string;
  description?: string;
  updated: string;
  isClosed: boolean;
}

interface TodoDb {
  todos: Array<Todo>;
}

export { Todo, TodoDb };
