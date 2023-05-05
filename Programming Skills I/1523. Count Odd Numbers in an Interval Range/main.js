// Author: Martin Flasar
// Date: 5/4/2023
// LeetCode: 1523. Count Odd Numbers in an Interval Range
// URL: https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
//

var countOdds = function(low, high) {
    return Math.floor((high - low) / 2) + (low % 2 || high % 2);
};

// Test Cases
console.log(countOdds(3, 7)); // 3
console.log(countOdds(8, 10)); // 1
console.log(countOdds(0, Math.pow(10, 9))); // 1

// Runtime: 57 ms, Memory Usage: 41.9 MB