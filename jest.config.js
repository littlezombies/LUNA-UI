// https://jestjs.io/docs/zh-Hans/configuration

module.export = {
  verbose: true,
  clearMocks: false,
  collectCoverage: false,
  collectCoverageFrom: [
    "{lib,include}/**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  reporters: ["default"],
};
