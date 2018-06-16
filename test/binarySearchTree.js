const assert = require('assert');
const BinarySearchTree = require('../').BinarySearchTree;

describe('Binary Search Tree', () => {

  it('should be correct size', () => {
    const btree = new BinarySearchTree();
    assert.equal(btree.size(), 0);

    btree.insert(5, 'joe');
    btree.insert(-1, 'sam');
    btree.insert(2, 'stuff');
    btree.insert(100, 'henry');
    btree.insert(20000, 'dylan');
    btree.insert(32234, 'hannah');

    assert.equal(btree.size(), 6);
  });

  it('should contain key 2', () => {
    const btree = new BinarySearchTree();

    btree.insert(5, 'joe');
    btree.insert(-1, 'sam');
    btree.insert(2, 'stuff');
    btree.insert(100, 'henry');

    assert.equal(btree.contains(2), true);
  });

  it('should have max key of 13113', () => {
    const btree = new BinarySearchTree();

    btree.insert(5, 'joe');
    btree.insert(-1, 'sam');
    btree.insert(2, 'stuff');
    btree.insert(100, 'henry');
    btree.insert(13113, 'jonny');
    btree.insert(1232, 'sally');
    btree.insert(13112, 'ken');
    btree.insert(322, 'kody');
    btree.insert(-100, 'ben');

    assert.equal(btree.maxKey(), 13113);
  });

  it('should have min key of -100', () => {
    const btree = new BinarySearchTree();

    btree.insert(5, 'joe');
    btree.insert(-1, 'sam');
    btree.insert(2, 'stuff');
    btree.insert(100, 'henry');
    btree.insert(13113, 'jonny');
    btree.insert(1232, 'sally');
    btree.insert(13112, 'ken');
    btree.insert(322, 'kody');
    btree.insert(-100, 'ben');

    assert.equal(btree.minKey(), -100);
  });

  it('should return inOrder', () => {
    const btree = new BinarySearchTree();

    btree.insert(5, 'joe');
    btree.insert(-1, 'sam');
    btree.insert(2, 'stuff');
    btree.insert(100, 'henry');
    btree.insert(13113, 'jonny');
    btree.insert(-230, 'ken');

    const btreeInOrder = btree.inOrder();

    assert.equal(btreeInOrder[0].key, -230);
    assert.equal(btreeInOrder[0].value, 'ken');

    assert.equal(btreeInOrder[1].key, -1);
    assert.equal(btreeInOrder[1].value, 'sam');

    assert.equal(btreeInOrder[2].key, 2);
    assert.equal(btreeInOrder[2].value, 'stuff');

    assert.equal(btreeInOrder[3].key, 5);
    assert.equal(btreeInOrder[3].value, 'joe');

    assert.equal(btreeInOrder[4].key, 100);
    assert.equal(btreeInOrder[4].value, 'henry');

    assert.equal(btreeInOrder[5].key, 13113);
    assert.equal(btreeInOrder[5].value, 'jonny');

  });
});

