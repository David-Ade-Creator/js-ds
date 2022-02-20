// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Input: root = [1,2,2,null,3,null,3]
// Output: false

const assymetric = (root) => {
    return matchNodes(root.left,root.right);
};

const matchNodes = (left,right) => {
    if(!left || !right) return left === right;
    if(left.val !== right.val) return false;

    return matchNodes(left.left,right.right) && matchNodes(left.right,right.left);
}