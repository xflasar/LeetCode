// Author: Martin Flasar
// Date: 5/6/2023
// LeetCode: 191. Number of 1 Bits
// URL: https://leetcode.com/problems/number-of-1-bits/
//

var hammingWeight = function (n) {
    return n.toString(2).split('').filter(x => x === '1').length;
}

// Test Cases
console.log(hammingWeight(00000000000000000000000000001011) === 3); // 3
console.log(hammingWeight(00000000000000000000000010000000) === 1); // 1
console.log(hammingWeight(11111111111111111111111111111101)); // 31

// Runtime: 70 ms, Memory Usage: 43.5 MB