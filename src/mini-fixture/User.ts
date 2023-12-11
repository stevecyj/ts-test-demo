import { Product } from "./Product";
export class User {
  name: string;
  age: number;
  email: string;
  address: string;
  constructor(
    name: string,
    age: number = 0,
    email: string = "",
    address: string = ""
  ) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
  }

  // buy 只需要測試 name 和 product.name 是否正確
  buy(product: Product) {
    return `User ${this.name} buys ${product.name}`;
  }
}

export default User;
