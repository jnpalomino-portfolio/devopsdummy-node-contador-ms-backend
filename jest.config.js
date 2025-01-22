module.exports = {
    reporters: [
      "default",
      ["jest-junit", {
        outputDirectory: "test-results",
        outputName: "test-results.xml",
      }]
    ],
    coverageReporters: ["lcov"]
  };