import { config } from "./config";

export function tellAge() {
  if (config.allowTellAge) {
    return 18;
  }

  return "不告訴你";
}

// 依賴 config.getAge() 的回傳值
export function tellByFunction() {
  return config.getAge() === 18 ? "yes" : "no";
}
