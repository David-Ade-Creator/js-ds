// Given the root of a binary tree, invert the tree, and return its root.
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Input: root = [2,1,3]
// Output: [2,3,1]

//Recursively
var invertTree = function (root) {
    if (root == null) return null;
    invertTree(root.right);
    invertTree(root.left);
    let temp = root.left
    root.left = root.right;
    root.right = temp
    return root;
  };
  
  
  //Iteratively (using BFS)
  var invertTree2 = function (root) {
    if (root == null) return null
    let queue = [root]
    while (queue.length != 0) {
      let current = queue.shift()
      let temp = current.left
      current.left = current.right
      current.right = temp
      if (current.left != null) queue.push(current.left)
      if (current.right != null) queue.push(current.right)
    }
    return root
  };