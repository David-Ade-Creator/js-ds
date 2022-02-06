class Node {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

// inorder traversal of a tree
const inOrder = (temp) => {
  if (temp === null) {
    return;
  }
  inOrder(temp.left);
  console.log(temp.key);
  inOrder(temp.right);
};

const insertKey = (temp, key) => {
  if (temp === null) {
    root = new Node(key);
    return;
  }

  var q = [];

  q.push(temp);

  while (q.length !== 0) {
    temp = q.pop();

    if (temp.left === null) {
      temp.left = new Node(key);
      break;
    } else {
      q.push(temp.left);
    }

    if (temp.right === null) {
      temp.right = new Node(key);
      break;
    } else {
      q.push(temp.right);
    }
  }
};

// function to delete the deepest rightmost node.
// Then delete the deepest rightmost node.
const deleteDeepest = (root, delNode) => {
  var q = [];
  q.push(root);

  var temp = null;

  while (q.length > 0) {
    temp = q.shift();

    if (temp === delNode) {
      temp = null;
      return;
    }

    if (temp.left !== null) {
      if (temp.left === delNode) {
        temp.left = null;
        return;
      } else q.push(temp.left);
    }

    if (temp.right !== null) {
      if (temp.right === delNode) {
        temp.right = null;
        return;
      } else q.push(temp.right);
    }
  }
};

// Starting at the root, find the deepest and rightmost node in binary tree and node which we want to delete. 
// Replace the deepest rightmost node’s data with the node to be deleted. 
// Then delete the deepest rightmost node.
const deleteNode = (root, key) => {
  if (root === null) return;
  if (root.left === null && root.right === null) {
    if (root.key === key) {
      root = null;
      return;
    }
  }

  var q = [];
  q.push(root);
  var temp,
    keyNode = null;
  while (q.length > 0) {
    temp = q.shift();

    if (temp.key === key) keyNode = temp;
    if (temp.left !== null) q.push(temp.left);
    if (temp.right !== null) q.push(temp.right);
  }

  if (keyNode !== null) {
    let x = temp.key;
    deleteDeepest(root, temp);
    keyNode.key = x;
  }
};

// calculate the size of a tree

class BinaryTree{
    constructor() {
        this.root = null;
    }

    size(node = this.root) {
        if(node === null){
            return 0;
        }else{
            return this.size(node.left) + 1 + this.size(node.right)
        }
    }
    
}

// for calculating size of tree

//   /* creating a binary tree and entering the nodes */
//   var tree = new BinaryTree();
//   tree.root = new Node(1);
//   tree.root.left = new Node(2);
//   tree.root.right = new Node(3);
//   tree.root.left.left = new Node(4);
//   tree.root.left.right = new Node(5);

// 


// find maximum depth or height of a tree

// 1. If tree is empty then return -1
// 2. Else
//      (a) Get the max depth of left subtree recursively  i.e., 
//           call maxDepth( tree->left-subtree)
//      (a) Get the max depth of right subtree recursively  i.e., 
//           call maxDepth( tree->right-subtree)
//      (c) Get the max of max depths of left and right 
//           subtrees and add 1 to it for the current node.
//          max_depth = max(max dept of left subtree,  
//                              max depth of right subtree) 
//                              + 1
//      (d) Return max_depth

const maxDepth = (node) =>{
    if(node === null) return -1

    var ldepth = maxDepth(node.left);
    var rdepth = maxDepth(node.right);

    if(ldepth > rdepth) return (ldepth + 1);
    else return (rdepth + 1);
}

// Given the root node of a binary search tree and two integers low and high, 
// return the sum of values of all nodes with a value in the inclusive range [low, high].
// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.


var rangeSumBST = function(root, low, high) {
    let sum = 0;
    const dfs = (root) => {
        if(!root) return root;
        if(root.key >= low && root.key <= high) sum+=root.key;
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return sum;
};

// Driver code
var root = new Node(10);
root.left = new Node(11);
root.left.left = new Node(7);
root.left.right = new Node(12);
root.right = new Node(9);
root.right.left = new Node(15);
root.right.right = new Node(8);

console.log("Inorder traversal before insertion:");
inOrder(root);

var key = 12;
insertKey(root, key);

console.log("Inorder traversal after insertion:");
inOrder(root);

deleteNode(root, 11);
console.log("Inorder traversal after deletion:");
inOrder(root);
