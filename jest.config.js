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
        outputDirectory: "test-results",
        outputName: "test-results.xml",
      },
    ],
  ],
};
