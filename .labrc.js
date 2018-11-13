module.exports = {
  coverage: true,
  leaks: false,
  transform: "node_modules/lab-babel",
  verbose: true,
  reporter: ["console", "lcov", "json", "html"],
  output: [
    "stdout",
    "coverage/lcov.info",
    "coverage/data.json",
    "coverage/coverage.html"
  ],
  timeout: 200000,
  "context-timeout": 200000
};
