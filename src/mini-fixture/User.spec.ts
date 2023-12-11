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
});
