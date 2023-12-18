import { jojoLogin } from "jojo";

const state = {
  tip5String: "",
};

export function login(username: string, password: string) {
  jojoLogin(username, password);
}

export function loginV2(username: string, password: string) {
  const isLogin = jojoLogin(username, password);

  if (isLogin) {
    state.tip5String = "登录成功";
  }
}

export function getTip() {
  return state.tip5String;
}
