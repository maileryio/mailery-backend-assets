import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import polyfill from 'rollup-plugin-polyfill';
import { eslint } from 'rollup-plugin-eslint';

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

export default (async () => ({
  input: 'src/index.js',
  output: {
    name: 'mailery.backend',
    exports: 'named',
    sourcemap: true,
    globals: {
      'vue': 'Vue',
      'vuex': 'Vuex'
    }
  },
  external: [
    'vue',
    'vuex'
  ],
  plugins: [
    eslint({
      exclude: [
        'src/styles/**'
      ]
    }),
    commonjs(),
    resolve(),
    polyfill([
      'whatwg-fetch'
    ]),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    vue({
      css: true,
      compileTemplate: true
    }),
    buble({
      objectAssign: 'Object.assign'
    }),
    isProd && (await import('rollup-plugin-terser')).terser()
  ]
}))();
