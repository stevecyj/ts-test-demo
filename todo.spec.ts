test.skip("add todo with reverse", () => {
  const todoStore = useTodoStore();
  const title = "reverse:hihi";

  // 調用
  todoStore.addTodo(title);

  // 驗證
  expect(todoStore.todos[0].title).toBe("ihhi");
});

test.skip("remove todo", () => {
  // 準備數據
  setActiviePinia(createPinia());
  const todoStore = useTodoStore();
  const todo = todoStore.addTodo("吃飯"); // round-trip

  // 調用
  todoStore.removeTodoById(todo!.id);

  // 驗證
  expect(todoStore.todos.length).toBe(0);
});
