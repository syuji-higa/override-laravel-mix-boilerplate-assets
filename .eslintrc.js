module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true
  },
  rules: {
    'no-console':
      process.env.NODE_ENV === 'production'
        ? [
            'error',
            {
              allow: ['warn', 'error']
            }
          ]
        : 'off'
  }
}
