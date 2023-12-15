export interface IUser {
  id: number;
  name: string;
}

export class Database {
  // 系統的狀態
  private dataStore: IUser[] = [];

  addUser(user: IUser): void {
    this.dataStore.push(user);
  }

  getUser(id: number): IUser | undefined {
    return this.dataStore.find((user) => user.id === id);
  }
}
