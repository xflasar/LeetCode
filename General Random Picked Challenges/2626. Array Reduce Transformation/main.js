// Author: Martin Flasar
// Date: 5/4/2023
// LeetCode: 2626. Array Reduce Transformation
// URL: https://leetcode.com/problems/array-reduce-transformation/
//

var reduce = function(nums, fn, init) {
    if(nums.length === 0) {
        return init;
    }
    
    var res = init;
    
    nums.forEach(num => {
        res = fn(res, num);
    });
    return res;
};

console.log(reduce([1,2,3,4], (a, b) => a + b, 0));
console.log(reduce([1,2,3,4], (a, b) => a + b * b, 100));
console.log(reduce([], (a, b) => {return 0;}, 25));

// Runtime: 69 ms, Memory Usage: 42.1 MB