import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'

const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

console.log('----------dev:', process.env.NODE_ENV, isDev);

const resolveFile = function (filePath) {
  return path.join(__dirname, '..', filePath)
}

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: "bundle",
    sourcemap: true,
    globals: {
      lodash: '_'
    },
    banner: '/* my-rollup-build-library（@zhou wei） version: ' + '1' + ' */',
    footer: '/* follow me! */'
  },
  external: ['lodash'],
  plugins: [
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
      contentBase: [resolveFile('example'), resolveFile('dist')],
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }) : null
  ],
}
