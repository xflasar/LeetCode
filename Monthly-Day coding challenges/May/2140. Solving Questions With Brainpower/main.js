// Author: Martin Flasar
// Date: 5/12/2023
// LeetCode: 2140. Solving Questions With Brainpower
// URL: https://leetcode.com/problems/solving-questions-with-brainpower/
//

function mostPoints(questions) {
    const n = questions.length
    const dp = new Array(n)
    dp[n - 1] = questions[n - 1][0]

    for (let i = n - 2; i >= 0; --i) {
        dp[i] = questions[i][0]
        const skip = questions[i][1]
        if (i + skip + 1 < n) {
            dp[i] += dp[i + skip + 1]
        }
        dp[i] = Math.max(dp[i], dp[i+1])
    }
    return dp[0]
}


// Test Cases
console.log(mostPoints([[1, 2], [2, 4], [4, 8]])) // 8
console.log(mostPoints([[1, 2], [2, 1]])) // 2
console.log(mostPoints([[1, 2], [2, 1], [1, 2]])) // 4


// Runtime: 167 ms (Beats 97.83% of JS submissions), Memory Usage: 80.4 MB