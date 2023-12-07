import { todos, addTodo } from "./index";
// 1. 重複 code
// 2. 當 given 複雜時，會變得很難閱讀

describe("in-line", () => {
  it("addTodo", () => {
    // given
    const todo = {
      title: "test",
      description: "today we go test",
    };

    // when
    addTodo(todo);

    // then
    expect(todos[0]).toBe(todo);
  });
});
