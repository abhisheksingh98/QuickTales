// jest.config.js
module.exports = {
  testEnvironment: "jsdom", // Use jsdom for testing React components
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
};
