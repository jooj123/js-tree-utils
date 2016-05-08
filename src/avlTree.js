'use strict';

var Node = require('./node.js');
var BinarySearchTree = require('./binarySearchTree.js');

function AvlTree(options) {
  this.options = options || [];
  this.root = null;
}

// inherit from BinarySearchTree as things like Searching are the same
AvlTree.prototype = Object.create(BinarySearchTree.prototype);

AvlTree.prototype.height = function(node) {
  if (!node) {
    return 0;
  }
  return node.height;
}

/*
 * Rotate Right
 *
 *     C (Height 2)
 *    /
 *   B (Height 1)      B
 *  /                 / \
 * A (Height 0)   => A   C
 */
AvlTree.prototype.rightRotate = function(node) {
  var left = node.left;
  var rightOfLeft = left.right;

  // perform rotation
  left.right = node;
  node.left = rightOfLeft;

  // update heights
  node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
  left.height = Math.max(this.height(left.left), this.height(left.right)) + 1;

  // return new root node
  return left;
}


AvlTree.prototype.leftRotate = function(node) {
  var right = node.right;
  var leftOfRight = right.left;

  // perform rotation
  right.left = node;
  node.right = leftOfRight;

  // update heights
  node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
  right.height = Math.max(this.height(right.left), this.height(right.right)) + 1;

  // return new root node
  return right;
}


AvlTree.prototype.getBalance = function(node) {
  if (!node) {
    return 0;
  }

  return this.height(node.left) - this.height(node.right);
}

AvlTree.prototype.insert = function(key, value) {
  this.root = this.insertNode(this.root, key, value);
}

AvlTree.prototype.insertNode = function(node, key, value) {
  var balance = 0;

  if (node === null) {
    return new Node(key, value);
  }

  // console.log('Key: %s Node Key: %s', key, node.key);

  if (key < node.key) {
    node.left = this.insertNode(node.left, key, value);
  } else {
    node.right = this.insertNode(node.right, key, value);
  }

  // update height of this ancestor node
  node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;

  // Get the balance factor of this ancestor node to check whether
  // this node became unbalanced
  balance = this.getBalance(node);

  // If node becomes unbalanced there is 4 cases

  // left left case
  if (balance > 1 && key < node.left.key) {
    return this.rightRotate
  }

  // right right case
  if (balance < -1 && key > node.right.key) {
    return this.leftRotate(node);
  }

  // left right case
  if (balance > 1 && key > node.left.key) {
    node.left = this.leftRotate(node.left);
    return this.rightRotate(node);
  }

  // right left case
  if (balance < -1 && key < node.right.key) {
    node.right = this.rightRotate(node.right);
    return this.leftRotate(node);
  }

  return node;
}


module.exports = AvlTree;

