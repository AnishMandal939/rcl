import resolve from "@rollup/plugin-node-resolve"; // locate modules using the node resolution algorithm, for using third party modules in node_modules
import typescript from "@rollup/plugin-typescript"; // compile TypeScript to JavaScript, seamless integration between rollup and typescript
import commonjs from "@rollup/plugin-commonjs"; // convert CommonJS modules to ES6, so they can be included in a Rollup bundle
import dts from "rollup-plugin-dts"; // generate .d.ts file, for TypeScript declaration file
import postcss from "rollup-plugin-postcss"; // process CSS with PostCSS, for using CSS in JS
import packageJson from "./package.json" with { type: "json" }; // import package.json for using package.json in rollup.config.mjs

// configuration rollup
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      postcss({
        extensions: [".css"],
        inject: true,
        extract: false,
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css)$/],
  },
];
