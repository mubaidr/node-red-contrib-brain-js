module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {},
  rules: {
    'no-loop-func': 0,
    semi: 0,
    'linebreak-style': 0,
    'no-continue': 0,
    'no-param-reassign': 0,
    // allow debugger during development
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
}
