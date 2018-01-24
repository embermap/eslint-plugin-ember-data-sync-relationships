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
  rules: {
    // Custom rules
    'ember-data-sync-relationships/no-async-relationships': 2
  }
};
