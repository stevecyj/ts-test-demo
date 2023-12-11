import { todos, addTodo } from "./index";

// 工廠函數
const createTodo = (
  title: string,
  description: string = "today we go test"
) => {
  return {
    title,
    description,
  };
};

const createPlayersAndUsers = () => {
  const userA = {
    name: "A",
    age: 18,
  };

  const userB = {
    name: "B",
    age: 18,
  };

  const userC = {
    name: "C",
    age: 18,
  };

  const playerA = new Player(new Weapons("sword"));
  playerA.life = 3;
  playerA.attack = () => {
    return 3;
  };

  const playerB = new Player(new Weapons("gun"));
  playerB.life = 2;
  playerB.attack = () => {
    return 3;
  };

  return {
    playerA,
    playerB,
    users: [userA, userB, userC],
  };
};

describe("delegated", () => {
  it("addTodo", () => {
    // given
    const todo = createTodo("eating");

    // when
    addTodo(todo);

    // then
    expect(todos[0]).toBe(todo);
  });

  it.skip("難以理解的 given", () => {
    // given
    const { playerA, playerB, users } = createPlayersAndUsers();

    // when
    fighting(playerA, playerB, users);

    // then
    expect(playerA.life).toBe(2);
  });
});
