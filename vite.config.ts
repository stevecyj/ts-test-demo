import { defineConfig } from "vitest/config";
import mockDevServerPlugin from "vite-plugin-mock-dev-server";

export default defineConfig({
  plugins: [mockDevServerPlugin()],
  test: {
    globals: true,
  },
  build: {
    lib: {
      entry: "./index.ts",
      name: "add",
    },
  },
  resolve: {
    alias: {
      "@": "./src/",
    },
  },
  server: {
    proxy: {
      "^/api": "http://example.com/",
    },
  },
});
