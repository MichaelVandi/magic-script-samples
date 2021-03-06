import React from 'react'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const common = {
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        // We should probably declare all named react exports by default.
        react: Object.keys(React),
        'react-is': ['isValidElementType'],
      },
    }),
  ],
}

export default [
  // Build for MagicScript on LuminOS
  {
    ...common,
    external: ['uv', 'lumin', 'ssl', 'jpeg', 'png', 'gl'],
    input: 'src/main.js',
    preserveModules: true,
    output: {
      dir: 'bin',
      format: 'es',
    },
  },
  // Build for MagicScript on Magicverse (iOS, Android)
  {
    ...common,
    input: 'src/app.js',
    external: ['react'],
    output: {
      globals: {
        react: 'React',
      },
      file: 'bin/bundle.js',
      format: 'iife',
      name: '_',
    },
  },
]
