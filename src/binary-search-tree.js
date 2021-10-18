const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  tree;

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.tree === null) {
      this.tree = newNode;
    } else {
      insertNode(this.tree, newNode);
    }

    function insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    function findNode(node) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        return findNode(node.left, data);
      } else if (data > node.data) {
        return findNode(node.right, data);
      } else {
        return node;
      }
    }
    return findNode(this.tree);
  }

  remove(data) {
    function minimum(node) {
      if (node.left == null) {
        return node;
      } else {
        return minimum(node.left)
      }
    }
    function removeNode(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
      
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
    
        let newNode = minimum(node.right);
        node.data = newNode.data;
        node.right = removeNode(node.right, newNode.data);
        return node;

      }
    }
    removeNode(this.tree, data);
  }


  min() {
    function minimum(node) {
      if (node.left == null) {
        return node.data;
      } else {
        return minimum(node.left)
      }
    }
    return minimum(this.tree);
  }


  max() {
    function maximum(node) {
      if (node.right == null) {
        return node.data;
      } else {
        return maximum(node.right)
      }
    }
    return maximum(this.tree)
  }


}