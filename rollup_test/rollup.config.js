import typescript from '@rollup/plugin-typescript'
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.umd.js',
    format: 'umd',
    // 如果设umd的话，必须设name
    // 打出不来包的，全局变量名，如果这样写，window.gsp，可以获取
    name: 'gsp',
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**', // 仅仅转译我们的源码
    }),
    terser(),
    postcss(),
  ],
  // external: ['lodash'],
}
