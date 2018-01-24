# eslint-plugin-ember-data-sync-relationships

Ensures Ember Data relationships are sync (async: false)

## Using the plugin with Ember CLI

### Installation

Install the plugin as a dev dependency in your Ember CLI project.

```
npm install --save-dev eslint-plugin-ember-best-practices
```

This will make the plugin available to ESLint.

### Configuration

The `ember-cli-eslint` addon blueprint generates a .eslintrc.js configuration file at the root of the project.

Add the plugin's [recommended](https://github.com/ember-best-practices/eslint-plugin-ember-best-practices/blob/master/config/recommended.js) configuration to the list of extensions:

```js
// .eslintrc.js

module.exports = {
  // ...
  extends: [
    'eslint:recommended',
    'plugin:ember-data-sync-relationships/recommended'
  ],
  rules: {
  }
};
```
