var BinarySearchTree = require('./index').BinarySearchTree;

var options = {
  debug: true
};

var btree = new BinarySearchTree(options);
btree.insert(2, 'Joe');
btree.insert(5, 'Sally');
btree.insert(5, 'Sam');
btree.insert(15, 'Helen');
btree.insert(2, 'Alana');
btree.insert(7, 'Kelly');
btree.insert(-34, 'Martin');
btree.insert(2, 'Rocky');
btree.insert(767, 'Chapman');
btree.insert(35, 'Locke');
btree.insert(33, 'Steven');
btree.insert(23, 'Penny');
btree.insert(8, 'Joey');
btree.insert(99, 'Jessica');


var key = btree.contains(5);
console.log('Has 5 Key?: ', key);

var list = btree.inOrder();

//console.log('In Order List: ', list);

console.log('Min Key: ', btree.minKey());
console.log('Max Key: ', btree.maxKey());

console.log('Size: ', btree.size());

