// Author: Martin Flasar
// Date: 5/4/2023
// LeetCode: 2637. Promise Time Limit
// URL: https://leetcode.com/problems/promise-time-limit/
//

var timeLimit = function(fn, t) {
	return async function(...args) {
        new Promise((resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
            fn(...args).then(resolve).catch(reject);
        });
    }
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log);

// Runtime: 68 ms, Memory Usage: 41.9 MB