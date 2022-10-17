const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

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

  remove(data) {
    this.rootNode = removeData (this.rootNode,data)

    function removeData(node, data) {
      if (!node)
        return node;
      if (node.data > data)
        node.left = removeData(node.left, data);
      else if (node.data < data)
        node.right = removeData(node.right, data);
      else {
        if(!node.left)
          return node.right;
        else if (!node.right)
          return node.left;

        console.log(node.right, node.right.min)
        node.data = this.min(node.right).data;
        node.right = removeData(node.right, node.key)
      }
      return node;
    }

}

min(root = this.rootNode) {
  function minNode(node) {
    if (!node)
      return null;
    if (!node.left)
      return node;
    return minNode(node.left);
  }
  return minNode(root).data;

}

max(root = this.rootNode) {
  function maxNode(node) {
    if (!node)
      return null;
    if (!node.right)
      return node;
    return maxNode(node.right);
  }
  return maxNode(root).data;
}
}

module.exports = {
  BinarySearchTree
};