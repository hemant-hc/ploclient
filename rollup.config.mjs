import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from './package.json' assert { type: "json" };
 
export default {
  input:'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' }
  ],
  plugins: [
    json(),
    typescript({ compilerOptions: {lib: ["es5", "es6", "dom"], target: "es5"}}),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env','@babel/preset-react']
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    terser()
  ],
};
