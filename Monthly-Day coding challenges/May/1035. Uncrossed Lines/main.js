// Author: Martin Flasar
// Date: 5/12/2023
// LeetCode: 1035. Uncrossed Lines
// URL: https://leetcode.com/problems/uncrossed-lines/
//

var maxUncrossedLines = function(nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= m; i++) {
        let prev = 0;
        for (let j = 1; j <= n; j++) {
            const temp = dp[j];
            if (nums1[i-1] === nums2[j-1]) {
                dp[j] = prev + 1;
            } else {
                dp[j] = Math.max(dp[j-1], dp[j]);
            }
            prev = temp;
        }
    }
    return dp[n];
};

// Test Cases
console.log(maxUncrossedLines([1,4,2], [1,2,4])) // 2
console.log(maxUncrossedLines([2,5,1,2,5], [10,5,2,1,5,2])) // 3
console.log(maxUncrossedLines([1,3,7,1,7,5], [1,9,2,5,1])) // 2

// Runtime: 65 ms (Beats 95.12% of JS submissions), Memory Usage: 42.7 MB (Beats 97.56% of JS submissions)