import { it, expect, describe } from "vitest";
import { Product } from "./Product";
import { User } from "./User";

describe("User", () => {
  it("should buy a product", () => {
    const user = new User("John", 18, "john@john.com", "Taipei");
    const product = new Product("iPhone", 20000, "The best phone in the world");

    // buy 只需要測試 name 和 product.name 是否正確
    const result = user.buy(product);

    expect(result).toBe("User John buys iPhone");
  });

  it("v1, 使用參數預設值", () => {
    const user = new User("John");
    const product = new Product("iPhone");

    // buy 只需要測試 name 和 product.name 是否正確
    const result = user.buy(product);

    expect(result).toBe("User John buys iPhone");
  });

  it("v2, 委託，用工廠函數隱藏不需要的屬性", () => {
    const user = createUser("John");
    const product = createProduct("iPhone");

    // buy 只需要測試 name 和 product.name 是否正確
    const result = user.buy(product);

    expect(result).toBe("User John buys iPhone");
  });

  it("虛擬物件", () => {
    const user = createUser("John");
    const product = { name: "iPhone" } as Product;

    // buy 只需要測試 name 和 product.name 是否正確
    const result = user.buy(product);

    expect(result).toBe("User John buys iPhone");
  });
});

const createUser = (name: string) => {
  return new User(name, 18, "user@user.com", "Taipei");
};

const createProduct = (name: string) => {
  return new Product(name, 20000, "The best phone in the world");
};
