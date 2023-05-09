// Author: Martin Flasar
// Date: 5/9/2023
// LeetCode: 589. N-ary Tree Preorder Traversal
// URL: https://leetcode.com/problems/n-ary-tree-preorder-traversal/
//

var preorder = function (root) {
    let stack = [];
    let result = [];
    if (root === null) return result;
    stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();
        if(node === null) continue; // This is not needed, but it is good to have it here for future reference
        result.push(node.val);
        let children = node.children.reverse();
        children.forEach(child => stack.push(child));
    }
    return result; 
}

// Test Cases
console.log(preorder([1,null,3,2,4,null,5,6])); // [1,3,5,6,2,4]
console.log(preorder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14])); // [1,2,3,6,7,11,14,4,8,12,5,9,13,10]


// Runtime: 73 ms, Memory Usage: 45.5 MB