import { add } from "./src/add";

test("jest add", () => {
  expect(add(1, 1)).toBe(2);
});
