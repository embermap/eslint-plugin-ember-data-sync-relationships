# eslint-plugin-ember-data-sync-relationships

Ensures Ember Data relationships are sync (async: false)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ember-data-sync-relationships`:

```
$ npm install eslint-plugin-ember-data-sync-relationships --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ember-data-sync-relationships` globally.

## Usage

Add `ember-data-sync-relationships` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ember-data-sync-relationships"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ember-data-sync-relationships/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





