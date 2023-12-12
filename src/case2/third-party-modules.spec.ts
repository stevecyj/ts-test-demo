import { test, expect, vi } from "vitest";
import { doubleUserAge } from "./third-party-modules";
import axios from "axios"; // Import the 'axios' module

vi.mock("axios");

test("第3方模塊處理 axios", async () => {
  vi.mocked(axios.get).mockResolvedValue({ name: "JOJO", age: 18 });

  const result = await doubleUserAge();

  expect(result).toBe(36);
});
