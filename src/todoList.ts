interface Todo {
  title: string;
  description: string;
}

export const todos: Todo[] = [];

export const addTodo = (todo: Todo) => {
  todos.push(todo);
};
