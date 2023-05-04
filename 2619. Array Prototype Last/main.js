// Author: Martin Flasar
// Date: 5/3/2023
// LeetCode: 2619. Array Prototype Last
// URL: https://leetcode.com/problems/array-prototype-last/
//

Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    }
    let last = this[this.length - 1];
    return last;
};


let arr = [1, 2, 3];
console.log(arr.last());
arr = [];
console.log(arr.last());

// Runtime: 60 ms, Memory Usage: 41.3 MB