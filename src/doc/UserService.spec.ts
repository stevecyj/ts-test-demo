import { it, expect, describe } from "vitest";
import { UserService } from "./UserService";
import { Database } from "./database";

describe("UserService", () => {
  it("should create user", () => {
    const database = new Database();
    const userService = new UserService(database);

    const user = userService.createUser("John");

    // key: 到 database 裡面找到 user.id 的資料，並且檢查 name 是否為 John
    // expect(database.getUser(user.id)?.name).toBe("John");
    expect(userService.findUser(user.id)?.name).toBe("John");
  });
});
