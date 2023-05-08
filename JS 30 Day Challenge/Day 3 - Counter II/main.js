// Author: Martin Flasar
// Date: 5/4/2023
// LeetCode: 2665. Counter II
// URL: https://leetcode.com/problems/counter-ii/
//

var createCounter = function(init) {
    let val = init;

    return{
        increment: () => ++val,
        decrement: () => --val,
        reset: () => val = init
    }
};