// Author: Martin Flasar
// Date: 5/13/2023
// LeetCode: 2466. Count Ways To Build Good Strings
// URL: https://leetcode.com/problems/count-ways-to-build-strings-from-any-permutation/
//

function countGoodStrings(low, high, zero, one) {
    const dp = new Array(high + 1).fill(0);
    dp[0] = 1;
    const mod = 1e9 + 7;
    
    for (let end = 1; end <= high; ++end) {
        if (end >= zero) {
            dp[end] += dp[end - zero];
        }
        if (end >= one) {
            dp[end] += dp[end - one];
        }
        dp[end] %= mod;
    }
    
    let answer = 0;
    for (let i = low; i <= high; ++i) {
        answer += dp[i];
        answer %= mod;
    }
    return answer;
}

console.log(countGoodStrings(3, 3, 1, 1));
console.log(countGoodStrings(3, 4, 2, 1));
console.log(countGoodStrings(2, 4, 1, 2));
console.log(countGoodStrings(4, 50, 2, 4));

// Runtime: 88 ms, Memory Usage: 45.9 MB