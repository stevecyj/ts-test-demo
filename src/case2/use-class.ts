import { User } from "./User";

export function doubleUserAge(): number {
  let user = new User();
  console.log("user =====> ", user);

  // 調用屬性
  // return user.age * 2;

  // 調用方法
  return user.getAge() * 2;
}
