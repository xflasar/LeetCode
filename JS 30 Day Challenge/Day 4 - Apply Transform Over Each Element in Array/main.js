// Author: Martin Flasar
// Date: 5/8/2023
// LeetCode: 2635. Apply Transform Over Each Element in Array
// URL: https://leetcode.com/problems/apply-transform-over-each-element-in-array/
//

var applyTransform = function(arr, fn) {
    arr.forEach((element,index) => {arr[index] = fn(element,index);});
    return arr;
}

let arr = [1,2,3];
fn = function double(n) { return n + 1; }
console.log(applyTransform(arr, fn));

arr = [1,2,3];
fn = function double(n, i) { return n + i; }
console.log(applyTransform(arr, fn));

arr = [10,20,30];
fn = function constant() { return 42; }
console.log(applyTransform(arr, fn));

// Runtime: 61 ms, Memory Usage: 42.1 MB