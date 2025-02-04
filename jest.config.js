module.exports = {
  collectCoverage: true,
  coverageReporters: ["lcov", "cobertura"],
  testResultsProcessor: "jest-sonar-reporter",
  coverageDirectory: "coverage",
  testEnvironment: "node",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputName: "test-results.xml",
      },
    ],
  ],
};
