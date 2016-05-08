# Node Binary Search Tree Library
Includes a standard Binary Search Tree, AVL Tree and Red-Black Tree.

Please star if you like this repo :)

## Quick Start

```shell
$ npm install node-tree --save
```

## Standard Binary Search Tree

Worst case big O notation:
Space: O(n)
Search: O(n)
Insert: O(n)
Delete: O(n)

### Binary Search Tree Usage

Include a binary search tree:

```
var BinarySearchTree = require('node-tree').BinarySearchTree;
```

Create Binary Search Tree and optionally pass in options:

```
var options = {
  // options here
};

var btree = new BinarySearchTree(options);
```

Insert records (key, value):

```
btree.insert(12, 'test');
```

Check if tree contains a key:

```
var key = btree.contains(5);
console.log('Has 5?: ', key);
```

Return the tree in order:

```
var list = btree.inOrder();
```

Get the max key of tree:

```
btree.maxKey()
```

Get the min key of tree:

```
btree.minKey()
```

Get the size of tree:

```
btree.size()
```


## AVL Tree

Worst case big O notation:
Space: O(n)
Search: O(log n)
Insert: O(log n)
Delete: O(log n)

### AVL Tree Usage

Include a avl search tree:

```
var AvlTree = require('node-tree').AvlTree;
```

Create AVL and optionally pass in options:

```
var options = {
  // options here
};

var avlTree = new AvlTree(options);
```


