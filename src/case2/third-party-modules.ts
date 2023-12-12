// 調用第3方模塊，比如調用了 axios，如何測試？
import axios from "axios";

interface User {
  name: string;
  age: number;
}

export async function doubleUserAge() {
  const user: User = await axios.get("/api/test");
  console.log("user =====> ", user);
  return user.age * 2;
}
