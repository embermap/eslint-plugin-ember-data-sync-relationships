const rule = require('../../../lib/rules/no-async-relationships');
const MESSAGE = rule.meta.message;
const RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
});

ruleTester.run('no-async-relationships', rule, {
  valid: [
    {
      code: `
        export default Model.extend({
          posts: hasMany({ async: false })
        });`
    },
    {
      code: `
        export default Model.extend({
          posts: hasMany('post', { async: false })
        });`
    },
    {
      code: `
        export default Model.extend({
          posts: hasMany('post', { inverse: 'foo', async: false })
        });`
    },
    {
      code: `
        export default Model.extend({
          posts: hasMany({ inverse: 'foo', async: false })
        });`
    },
    {
      code: `
        export default Model.extend({
          posts: belongsTo({ async: false })
        });`
    },
    {
      code: `
        export default Model.extend({
          posts: belongsTo('post', { async: false })
        });`
    },
    {
      code: `
        export default Model.extend({
          posts: belongsTo('post', { inverse: 'foo', async: false })
        });`
    },
    {
      code: `
        export default Model.extend({
          posts: belongsTo({ inverse: 'foo', async: false })
        });`
    },
  ],
  invalid: [
    {
      code: `
        export default Model.extend({
          posts: hasMany()
        });`,
      errors: [{
        message: MESSAGE
      }]
    },
    {
      code: `
        export default Model.extend({
          posts: hasMany('post')
        });`,
      errors: [{
        message: MESSAGE
      }]
    },
    {
      code: `
        export default Model.extend({
          posts: hasMany('post', { inverse: 'foo' })
        });`,
      errors: [{
        message: MESSAGE
      }]
    },
    {
      code: `
        export default Model.extend({
          posts: hasMany({ async: true })
        });`,
      errors: [{
        message: MESSAGE
      }]
    },
    {
      code: `
        export default Model.extend({
          posts: hasMany('post', { async: true })
        });`,
      errors: [{
        message: MESSAGE
      }]
    },
    {
      code: `
        export default Model.extend({
          posts: hasMany('post', { inverse: 'foo', async: true })
        });`,
      errors: [{
        message: MESSAGE
      }]
    },
    {
      code: `
        export default Model.extend({
          post: belongsTo()
        });`,
      errors: [{
        message: MESSAGE
      }]
    },
    {
      code: `
        export default Model.extend({
          post: belongsTo('post')
        });`,
      errors: [{
        message: MESSAGE
      }]
    },
    {
      code: `
        export default Model.extend({
          post: belongsTo('post', { inverse: 'foo' })
        });`,
      errors: [{
        message: MESSAGE
      }]
    },
    {
      code: `
        export default Model.extend({
          post: belongsTo({ async: true })
        });`,
      errors: [{
        message: MESSAGE
      }]
    },
    {
      code: `
        export default Model.extend({
          post: belongsTo('post', { async: true })
        });`,
      errors: [{
        message: MESSAGE
      }]
    },
    {
      code: `
        export default Model.extend({
          post: belongsTo('post', { inverse: 'foo', async: true })
        });`,
      errors: [{
        message: MESSAGE
      }]
    },
  ]
});
