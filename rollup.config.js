import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'

const input = process.env.INPUT_FILE

function buildJS() {
  const config = {
    input: input,
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript(),
      terser({ format: { comments: false } })
    ]
  }

  return config
}


export default [buildJS()]
