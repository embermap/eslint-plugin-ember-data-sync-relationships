## No async relationships

### Rule name: `no-async-relationships`

Disallow the use of async relationships.

```js
// BAD

export default Model.extend({

  author: belongsTo(),

  comments: hasMany(),

});
```

```js
// BAD

export default Model.extend({

  author: belongsTo({ async: false }),

  comments: hasMany({ async: false })

});
```
