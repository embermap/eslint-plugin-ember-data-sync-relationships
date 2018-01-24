module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    'browser': true
  },
  plugins: [
    'ember-data-sync-relationships'
  ],
  extends: require.resolve('./base.js'),
  rules: {
    // Custom rules
    'ember-data-sync-relationships/no-async-relationships': 'error'
  }
};
