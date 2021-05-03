// 872. Leaf-Similar Tree

// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence
// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true

// Solution 1 O(n + m) time | O(n + m) space, where n is the number of nodes in first tree, m is the number of nodes in the second tree

var leafSimilar = function(root1, root2) {
    let values1 = [];
    let values2 = [];
    function traverse(node, values) {
        if (!node) return;
        if (node.left === null && node.right === null) {
            values.push(node.val);
            return;
        }
        traverse(node.left, values);
        traverse(node.right, values);
    }
    traverse(root1, values1);
    traverse(root2, values2);
    if (values1.length !== values2.length) return false;
    for (let i = 0; i < values1.length; i++) {
        if (values1[i] !== values2[i]) return false;
    }
    return true;
};
