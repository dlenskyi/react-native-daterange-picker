module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    quotes: [2, "double"],
  },
};
