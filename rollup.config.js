import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "build/index.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "build/index.esm.js",
        format: "esm",
        sourcemap: true,
      }
    ],
    plugins: [
      peerDepsExternal({
        includeDependencies: true,
      }),
      resolve(),
      commonjs(),
      typescript({exclude: ["**/*.test.*", "**/*.stories.*", "./src/test-utils/*"]}),
    ],
  }
];
