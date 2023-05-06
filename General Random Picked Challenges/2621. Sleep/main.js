// Author: Martin Flasar
// Date: 5/3/2023
// LeetCode: 2621. Sleep
// URL: https://leetcode.com/problems/sleep/
//

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let t = Date.now();
sleep(1000).then(() => console.log(Date.now() - t));

// Runtime: 54 ms, Memory Usage: 41.4 MB