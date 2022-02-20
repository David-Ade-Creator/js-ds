// Given an integer array nums where the elements are sorted in ascending order, 
// convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node 
// never differs by more than one.

// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,3] and [3,1] are both a height-balanced BSTs.

var sortedArrayToBST = function(nums) {
    return dfs(nums, 0, nums.length - 1)
};

const dfs = (nums, l, r) => {
    if (l > r) return null
    const m = Math.floor((l + r) / 2)
    const root = new TreeNode(nums[m])
    
    root.left = dfs(nums, l, m - 1)
    root.right = dfs(nums, m + 1, r)
    return root
}