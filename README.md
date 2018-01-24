# eslint-plugin-ember-data-sync-relationships

Ensures Ember Data relationships are sync (async: false)

## Using the plugin with Ember CLI

### Installation

Install the plugin as a dev dependency in your Ember CLI project.

```sh
npm install --save-dev eslint-plugin-ember-best-practices
```

This will make the plugin available to ESLint.

### Adding the rule

Add the plugin and rule to your project's `.eslintrc.js`:

```js
// .eslintrc.js

module.exports = {

  plugins: [
    'ember-data-sync-relationships'
  ],

  rules: {
    "ember-data-sync-relationships/no-async-relationships": "warn" // warn or error
  }

};
```
