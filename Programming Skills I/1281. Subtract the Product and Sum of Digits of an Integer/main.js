// Author: Martin Flasar
// Date: 5/6/2023
// LeetCode: 1281. Subtract the Product and Sum of Digits of an Integer
// URL: https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
//

var subtractProductAndSum = function (n) {
    return n.toString().split('').reduce((a, b) => parseInt(a) * parseInt(b)) - n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
}

// Test Cases
console.log(subtractProductAndSum(234) === 15); // 15
console.log(subtractProductAndSum(4421) === 21); // 21

// Runtime: 58 ms, Memory Usage: 42.5 MB