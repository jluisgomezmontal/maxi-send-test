module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
    "^.+\\.svg$": "jest-svg-transformer",
    "\\.(jpg|jpeg|png|svg)$": "./src/config/fileMock.js",
  },
};
