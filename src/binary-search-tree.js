const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addData(this.rootNode, data);

    function addData(node, data) {
      if (!node) {
        node = new Node(data);
        return node;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        node.right = addData(node.right, data);
      }

      if (node.data > data) {
        node.left = addData(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    function hasData(node, data) {
      if (!node)
        return false;
      if (node.data === data)
        return true;
      if (node.data < data)
        return hasData(node.right, data)
      return hasData(node.left, data)
    }
    return hasData(this.rootNode, data);
  }

  find(data) {
    function findData(node, data) {
      if (!node)
        return null;
      if (node.data === data)
        return node;
      if (node.data < data)
        return findData(node.right, data)
      return findData(node.left, data)
    }
    return findData(this.rootNode, data);
  }
}

remove(data) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

min() {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

max() {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
}

module.exports = {
  BinarySearchTree
};