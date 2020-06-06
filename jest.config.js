module.exports = {
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testResultsProcessor: "<rootDir>/node_modules/jest-html-reporter",
  collectCoverage: true,
  coverageReporters: ["text", "lcov"],
  coverageDirectory: "<rootDir>/test/reports/coverage",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}
