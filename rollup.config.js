import node from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sourcemaps from "rollup-plugin-sourcemaps";

module.exports = {
  // Fail on warnings by default
  onwarn: ({ code, message }, defaultHandler) => {
    switch (code) {
      // Allow eval() for tools such as ngrx-devtools :(
      case "EVAL":
        return defaultHandler({ code, message });

      default:
        throw new Error(`${code}: ${message}`);
    }
  },

  plugins: [
    node({
      mainFields: ["browser", "es2015", "module", "jsnext:main", "main"],
      jail: process.cwd(),
    }),
    commonjs(),
    sourcemaps(),
  ],

  output: {
    preferConst: true,
  },
};
