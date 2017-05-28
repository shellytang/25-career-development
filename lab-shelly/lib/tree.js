'use strict';

const Node = require('./tree-node');

const Tree = module.exports = function() {
  this.root = null;
};

Tree.prototype.add = function(val, parentVal) {
  let newNode = new Node(val);

  if(!this.root) {
    this.root = newNode;
    return;
  }

  this.preOrder(_helper);

  function _helper(node) {
    if(node.val === parentVal) {
      node.children.push(newNode);
      return;
    }
  }
};


Tree.prototype.preOrder = function(cb) {
  _walk(this.root);

  function _walk(node) {
    cb(node);
    node.children.forEach(_walk);
  }
};

Tree.prototype.prune = function(val) {
  if(!val) return new Error('must pass val');
  if(!root) return;
  let current = this.root;
  let parent, index;

  this.preOrder(node => {
    current.children.forEach((child, idx) => {
      if(child.val === val) {
        index = idx;
        parent = current;
        return;
      }
      current = node;
    });
  });

  if(!parent) return new Error('blah');
  parent.children.splice(index, 1);
};
