const assert = require('assert');
const AvlTree = require('../').AvlTree;

describe('AVL Tree', () => {

  it('should be correct size', () => {
    const avlTree = new AvlTree();
    assert.equal(avlTree.size(), 0);

    avlTree.insert(5, 'joe');
    avlTree.insert(-1, 'sam');
    avlTree.insert(2, 'stuff');
    avlTree.insert(100, 'henry');
    avlTree.insert(20000, 'dylan');
    avlTree.insert(32234, 'hannah');

    assert.equal(avlTree.size(), 6);
  });

  it('should contain key 2', () => {
    const avlTree = new AvlTree();

    avlTree.insert(5, 'joe');
    avlTree.insert(-1, 'sam');
    avlTree.insert(2, 'stuff');
    avlTree.insert(100, 'henry');

    assert.equal(avlTree.contains(2), true);
  });

  it('should have max key of 13113', () => {
    const avlTree = new AvlTree();

    avlTree.insert(5, 'joe');
    avlTree.insert(-1, 'sam');
    avlTree.insert(2, 'stuff');
    avlTree.insert(100, 'henry');
    avlTree.insert(13113, 'jonny');
    avlTree.insert(1232, 'sally');
    avlTree.insert(13112, 'ken');
    avlTree.insert(322, 'kody');
    avlTree.insert(-100, 'ben');

    assert.equal(avlTree.maxKey(), 13113);
  });

  it('should have min key of -100', () => {
    const avlTree = new AvlTree();

    avlTree.insert(5, 'joe');
    avlTree.insert(-1, 'sam');
    avlTree.insert(2, 'stuff');
    avlTree.insert(100, 'henry');
    avlTree.insert(13113, 'jonny');
    avlTree.insert(1232, 'sally');
    avlTree.insert(13112, 'ken');
    avlTree.insert(322, 'kody');
    avlTree.insert(-100, 'ben');

    assert.equal(avlTree.minKey(), -100);
  });

  it('should return inOrder', () => {
    const avlTree = new AvlTree();

    avlTree.insert(5, 'joe');
    avlTree.insert(-1, 'sam');
    avlTree.insert(2, 'stuff');
    avlTree.insert(100, 'henry');
    avlTree.insert(13113, 'jonny');
    avlTree.insert(-230, 'ken');

    const avlTreeInOrder = avlTree.inOrder();

    assert.equal(avlTreeInOrder[0].key, -230);
    assert.equal(avlTreeInOrder[0].value, 'ken');

    assert.equal(avlTreeInOrder[1].key, -1);
    assert.equal(avlTreeInOrder[1].value, 'sam');

    assert.equal(avlTreeInOrder[2].key, 2);
    assert.equal(avlTreeInOrder[2].value, 'stuff');

    assert.equal(avlTreeInOrder[3].key, 5);
    assert.equal(avlTreeInOrder[3].value, 'joe');

    assert.equal(avlTreeInOrder[4].key, 100);
    assert.equal(avlTreeInOrder[4].value, 'henry');

    assert.equal(avlTreeInOrder[5].key, 13113);
    assert.equal(avlTreeInOrder[5].value, 'jonny');

  });

});

