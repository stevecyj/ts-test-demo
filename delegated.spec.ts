import { todos, addTodo } from "./index";

const createTodo = (title: string) => {
  return {
    title,
    description: "today we go test",
  };
};

describe("delegated", () => {
  it("addTodo", () => {
    // given
    const todo = createTodo("test");

    // when
    addTodo(todo);

    // then
    expect(todos[0]).toBe(todo);
  });
});
