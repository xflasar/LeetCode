// Author: Martin Flasar
// Date: 5/10/2023
// LeetCode: 1672. Richest Customer Wealth
// URL: https://leetcode.com/problems/richest-customer-wealth/
//

var maximumWealth = function (accounts) {
    let max = 0
    for (let i = 0; i < accounts.length; i++) {
        let sum = accounts[i].reduce((a, b) => a + b, 0)
        if (sum > max) {
            max = sum
        }
    }
    return max
}

// Test Cases
console.log(maximumWealth([[1, 2, 3], [3, 2, 1]])) // 6
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]])) // 10
console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])) // 17

// Runtime: 80 ms, Memory Usage: 38.8 MB