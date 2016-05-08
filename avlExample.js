var AvlTree = require('./index').AvlTree;

var options = {
  debug: true
};

var avltree = new AvlTree(options);
avltree.insert(2, 'Joe');
avltree.insert(5, 'Sally');
avltree.insert(5, 'Sam');
avltree.insert(3, 'Sam');
avltree.insert(15, 'Helen');
avltree.insert(2, 'Alana');
avltree.insert(7, 'Kelly');
avltree.insert(-34, 'Martin');
avltree.insert(2, 'Rocky');
avltree.insert(767, 'Chapman');
avltree.insert(35, 'Locke');
avltree.insert(33, 'Steven');
avltree.insert(23, 'Penny');
avltree.insert(8, 'Joey');
avltree.insert(99, 'Jessica');

// var key = avltree.contains(5);
// console.log('Has 5 Key?: ', key);

var list = avltree.inOrder();

//console.log('In Order List: ', list);

console.log('Min Key: ', avltree.minKey());
console.log('Max Key: ', avltree.maxKey());

console.log('Size: ', avltree.size());

