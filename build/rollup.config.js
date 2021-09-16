import typescript from '@rollup/plugin-typescript';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'
import pkg from '../package.json';

const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

console.log('----------dev:', process.env.NODE_ENV, isDev);

// 一段自定义的内容，以下内容会添加到打包结果中
const footer = `
if (typeof window !== 'undefined') {
  window._CURRENT_VERSION_ = '${pkg.version}'
}`

const resolveFile = function (filePath) {
  return path.join(__dirname, '..', filePath)
}

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      footer,
      globals: {
        lodash: '_'
      },
    },
    {
      file: pkg.module,
      format: 'esm',
      footer,
      globals: {
        lodash: '_'
      },
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'rollup-bundle-browser-module',
      footer,
      sourcemap: true,
      globals: {
        lodash: '_'
      },
    },
  ],
  external: ['lodash'], // 与output.global同步使用
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    isDev ? serve({
      open: false,
      host: 'localhost',
      port: 8888,
      contentBase: [resolveFile('example'), resolveFile('lib')],
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }) : null
  ],
}
