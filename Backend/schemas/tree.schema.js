class TreeNode {
    constructor(key, value) {
      this.key = key; // File name or path
      this.value = value; // File metadata (e.g., path, size, creation date)
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // insert new node with empty tree
  
    insert(key, value) {
      const newNode = new TreeNode(key, value);
      // if root is null, then node will be added to the root (i.e., first node)
      if (this.root === null) {
        this.root = newNode;
      } 
      else {
        this.insertNode(this.root, newNode);
      }
    }
  
    // insert node
  
    insertNode(node, newNode) {
      if (newNode.key < node.key) {
        // if left is null insert node here
        if (node.left === null) {
          node.left = newNode;
        } 
        // if left is not null recur until null is found (i.e. correct position to insert)
        else {
          this.insertNode(node.left, newNode);
        }
      } 
      // similarly for right
      else {
        if (node.right === null) {
          node.right = newNode;
        } 
        else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // search
    search(key) {
      return this.searchNode(this.root, key);
    }
  
    // search node by key
    searchNode(node, key) {
        // if null return null
        if (node === null) {
            return null;
        } 
        // if key is less than node key, search left
        else if (key < node.key) {
            return this.searchNode(node.left, key);
        } 
        // if key is more than node key, search right
        else if (key > node.key) {
            return this.searchNode(node.right, key);
        } 
        // if key is equal to node key, return node
        else {
            return node.value;
        }
    }
  
    // create a json object from the tree
    toJSON() {
      return this.root;
    }
  }
  
  export default BinaryTree;