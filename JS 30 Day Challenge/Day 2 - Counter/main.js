// Author: Martin Flasar
// Date: 5/6/2023
// LeetCode: 2620. Counter
// URL: https://leetcode.com/problems/counter/
//

var createCounter = function(n) {
    let count = n - 1;
    return () => ++count;
}
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

// Runtime: 60 ms, Memory Usage: 41.9 MB