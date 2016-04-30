var BinarySearchTree = require('./index').BinarySearchTree;

var options = {
  debug: true
};

var btree = new BinarySearchTree(options);
btree.insert(2);
btree.insert(5);
btree.insert(5);
btree.insert(15);
btree.insert(2);
btree.insert(7);
btree.insert(-34);
btree.insert(2);
btree.insert(767);
btree.insert(35);
btree.insert(33);
btree.insert(23);
btree.insert(8);
btree.insert(99);



var value = btree.contains(5);
console.log('Has 5 Value?: ', value);

var list = btree.inOrder();

//console.log('In Order List: ', list);

console.log('Min Value: ', btree.min());
console.log('Max Value: ', btree.max());

console.log('Size: ', btree.size());

