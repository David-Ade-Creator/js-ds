// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
//  This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 


var diameterOfBinaryTree = function(root) {
    let max = 0
    
    let helper = (root) => {     
        if (!root) return 0
        
        let left = helper(root.left)
        let right = helper(root.right)
        
        max = Math.max(left + right, max)
        
        return Math.max(left, right) + 1
    }
    
    helper(root)
    
    return max
};