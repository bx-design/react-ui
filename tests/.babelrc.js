module.exports = {
  presets: ['@babel/env', '@babel/typescript'],
  plugins: [
    'styled-jsx/babel-test',
    '@babel/plugin-transform-runtime',
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ],
}
