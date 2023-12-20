export class User {
  id: string; // Add id property

  constructor(id: string) {
    this.id = id;
  }

  fetchData(callback: (data: string) => void, delay: number) {
    setTimeout(() => {
      const data = `Data of user ${this.id}`;
      callback(data);
    }, delay);
  }
}
