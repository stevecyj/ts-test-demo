import { vi, it, expect, describe } from "vitest";
import { login, loginV2, getTip } from "./login";
import { jojoLogin } from "jojo";

// stub 間接輸入
vi.mock("jojo", () => {
  return {
    // jojoLogin: () => true, // stub
    // jojoLogin: vi.fn().mockReturnValue(true), // mock, spy, 記錄值、驗證
    jojoLogin: vi.fn(() => true), // 另一種返回值的寫法
  };
});

describe("login", () => {
  it("should called login function from jojo", () => {
    login("username", "password");
    // expect(jojoLogin).toBeCalled();
    expect(jojoLogin).toBeCalledTimes(1);
  });

  it("login v2", () => {
    loginV2("username", "password");
    expect(jojoLogin).toBeCalled();
    expect(getTip()).toBe("登录成功");
  });
});
