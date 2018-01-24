module.exports = {
  extends: require.resolve('./base.js'),
  rules: {
    "ember-data-sync-relationships/no-async-relationships": "warn"
  }
};
