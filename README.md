# eslint-plugin-ember-data-sync-relationships

An ESLint plugin that ensures all of the relationships on your Ember Data models are sync.

## Why?

We think async relationships [do more harm than good](https://embermap.com/notes/83-the-case-against-async-relationships). If you agree, you can use this ESLint plugin to help you migrate an app away from async relationships, and once it's fully-sync, ensure no new async relationships are added inadvertently.

## Installation

Install the plugin as a dev dependency in your Ember CLI project.

```sh
npm install --save-dev eslint-plugin-ember-data-sync-relationships
```

This makes the plugin available to ESLint.

## Usage

Add the plugin and rule to your app's `.eslintrc.js`:

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

You can make the rule either "warn" or "error".

Using **warn** will show ESLint warnings whenever you build your app, for example when you run `ember serve`.

If you'd like to start removing async relationships from an existing app that relies on them, this is a good option, since it won't fail your test suite. You can eliminate async relationships one at a time until you arrive at fully synchronous bliss, at which time you can switch this ESLint rule to "error".

**"error"** will add any failures of the rule to your test suite. This is a stronger way to enforce all relationships are sync, since Ember Data's default is async and it can be easy to forget the additional `{ async: false }`.

## About

This library is developed and maintained by [EmberMap](https://embermap.com/). If you're looking to see how your company can get the most out of Ember, please [get in touch](mailto:info@embermap.com)!
