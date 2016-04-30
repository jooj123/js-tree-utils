var Node = require('./node.js');

function BinarySearchTree(options) {
  this.options = options || {};
  this.root = null;
}

BinarySearchTree.prototype.insert = function(value) {

  var node = new Node(value);
  var current;

  if (this.root === null) {
    this.root = node;
    return;
  }

  current = this.root;

  while (true) {
    if (value < current.value) {
      if (current.left === null) {
        current.left = node;
      } else {
        current = current.left;
      }

    } else if (value > current.value) {

      if (current.right === null) {
        current.right = node;
      } else {
        current = current.right;
      }
    } else {
      break;
    }
  }
}

// optionally search from a specific node
BinarySearchTree.prototype.contains = function(value, node) {
  var current = node;

  // search from the root node is node not specfied
  if (typeof current === 'undefined') {
    current = this.root;
  }

  if (current === null) {
    return false; // nothing found
  }

  if (value === current.value) {
    return  true;
  } else if (value > current.value) {
    return this.contains(value, current.right);
  } else if (value < current.value) {
    return this.contains(value, current.left);
  }
}

BinarySearchTree.prototype.inOrder = function() {
  var list = [];
  this.traverse(this.root, function(node) {
    console.log('Value: ', node.value);
    list.push(node);
  });

  return list;
}

BinarySearchTree.prototype.traverse = function(node, func) {
  if (node !== null) {
    if (node.left !== null) {
      this.traverse(node.left, func);
    }

    func.call(this, node);

    if (node.right !== null) {
      this.traverse(node.right, func);
    }
  }
}

BinarySearchTree.prototype.min = function() {

  var current = this.root;
  if (this.root === null) {
    return;
  }

  while (current.left !== null) {
    current = current.left;
  }

  return current.value;
}

BinarySearchTree.prototype.max = function() {

  var current = this.root;
  if (this.root === null) {
    return;
  }

  while (current.right !== null) {
    current = current.right;
  }

  return current.value;
}

BinarySearchTree.prototype.size = function() {
  var count = 0;

  this.traverse(this.root, function(node) {
    count++;
  })

  return count;
}


module.exports = BinarySearchTree;