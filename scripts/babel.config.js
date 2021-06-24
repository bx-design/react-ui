module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
      },
    ],
    '@babel/react',
    '@babel/typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    ['@babel/plugin-transform-runtime', { useESModules: true }],
    'styled-jsx/babel',
  ],
  ignore: [/@babel[\\|/]runtime/],
}
