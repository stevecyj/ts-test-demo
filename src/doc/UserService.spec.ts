import { vi, it, expect, describe } from "vitest";
import { UserService } from "./UserService";
import { Database } from "./database";

describe("UserService", () => {
  // 狀態驗證測試
  it("should create user", () => {
    const database = new Database();
    const userService = new UserService(database);

    const user = userService.createUser("John");

    // key: 到 database 裡面找到 user.id 的資料，並且檢查 name 是否為 John
    // expect(database.getUser(user.id)?.name).toBe("John");
    expect(userService.findUser(user.id)?.name).toBe("John");
  });

  // 行為驗證測試
  it.only("should add user to database", () => {
    Database.prototype.addUser = vi.fn();
    const database = new Database();
    // vi.spyOn(database, "addUser");
    console.log("addUser", database.addUser);

    const userService = new UserService(database);

    userService.createUser("John");

    expect(database.addUser).toBeCalled();
  });
});
