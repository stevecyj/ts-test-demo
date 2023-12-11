import { test, expect } from "vitest";
// import { reset, useTodoStore } from "./todo.remove";
// import { setActivePinia, createPinia } from "pinia";

test.skip("remove todo", () => {
  // 準備數據
  setActivePinia(createPinia());
  const todoStore = useTodoStore();
  const todo = {
    id: 1,
    title: "吃飯",
    description: "吃飯",
  };
  todoStore.todos.push(todo);

  store.removeTodoById(todo.id);

  expect(todoStore.todos.length).toBe(0);
});
