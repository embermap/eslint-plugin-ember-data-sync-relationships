const resolve = require('path').resolve;
const requireFolderTree = require('require-folder-tree');

const rules = requireFolderTree(resolve(__dirname, 'rules'));
const configs = requireFolderTree(resolve(__dirname, 'config'));

module.exports = {
  rules,
  configs
};
