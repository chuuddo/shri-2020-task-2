import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "build/linter.js",
    format: "umd",
    name: "lint",
    extend: true
  },
  plugins: [resolve(), commonjs(), babel()]
};
