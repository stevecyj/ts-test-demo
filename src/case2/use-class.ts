import { User } from "./User";

export function doubleUserAge(): number {
  let user = new User();
  console.log("user", user);
  return user.age * 2;
}
