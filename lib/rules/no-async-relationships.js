/**
 * @fileoverview Disallow the use of async relationships.
 */
"use strict";

const MESSAGE = 'Do not use async relationships.';

module.exports = {
  meta: {
    message: MESSAGE,
    docs: {
      description: "Disallow the use of async relationships.",
      category: "Ember Data Relationships",
      url: 'https://github.com/embermap/eslint-plugin-ember-data-sync-relationships/blob/master/docs/rules/no-async-relationships.md',
      recommended: true
    },
    schema: []
  },

  create(context) {
    return {
      CallExpression(node) {
        let isMemberExpression = node.callee.type === 'MemberExpression';
        let isIdentifier = node.callee.type === 'Identifier';
        let isHasManyMemberExpression = isMemberExpression && node.callee.property.name === 'hasMany';
        let isHasManyIdentifier = isIdentifier && node.callee.name === 'hasMany';
        let isHasMany = isHasManyMemberExpression || isHasManyIdentifier;
        let isBelongsToMemberExpression = isMemberExpression && node.callee.property.name === 'belongsTo';
        let isBelongsToIdentifier = isIdentifier && node.callee.name === 'belongsTo';
        let isBelongsTo = isBelongsToMemberExpression || isBelongsToIdentifier;

        if ((isHasMany || isBelongsTo) && node.parent.type === 'Property') {
          let hasArguments = node.arguments.length > 0;

          if (!hasArguments) {
            context.report(node, MESSAGE);

          } else if (hasArguments) {
            let lastArgument = hasArguments && node.arguments[node.arguments.length - 1];
    		  let lastArgumentIsOptions = lastArgument.type === 'ObjectExpression';

            if (lastArgumentIsOptions) {
              let existingAsyncOption = lastArgument.properties.find(prop => prop.key.name === 'async');
              if (existingAsyncOption) {
                if (existingAsyncOption.value.value === true) {
                  context.report(node, MESSAGE);
                }
              } else {
                context.report(node, MESSAGE);
              }

            } else {
              context.report(node, MESSAGE);
            }
          }
        }
      }
    };
  }
};
