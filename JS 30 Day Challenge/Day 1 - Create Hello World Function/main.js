// Author: Martin Flasar
// Date: 5/4/2023
// LeetCode: 2667. Create Hello World Function
// URL: https://leetcode.com/problems/create-hello-world-function/
//

var createHelloWorld = function() {
    return (...args) => "Hello World"
};

// Test Cases
createHelloWorld()(); // "Hello World"
createHelloWorld()({}, null, 42); // "Hello World"

// Runtime: 55ms, Memory Usage: 41.9 MB