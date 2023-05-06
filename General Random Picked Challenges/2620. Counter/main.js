// Author: Martin Flasar
// Date: 5/4/2023
// LeetCode: 2620. Counter
// URL: https://leetcode.com/problems/counter/
//

var createCounter = function(n) {
    n--;
    return function() {
        n++;
        return n;
    }
}
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

// Runtime: 60 ms, Memory Usage: 42.5 MB