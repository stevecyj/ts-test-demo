import { Database, IUser } from "./database";

// SUT: UserService
export class UserService {
  constructor(private db: Database) {}

  createUser(name: string): IUser {
    const id = Math.floor(Math.random() * 1000);
    const newUser: IUser = { id, name };
    this.db.addUser(newUser);
    return newUser;
  }

  // 提供給外部使用狀態的 API
  findUser(id: number): IUser | undefined {
    return this.db.getUser(id);
  }
}
