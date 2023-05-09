// Author: Martin Flasar
// Date: 5/9/2023
// LeetCode: 1232. Check If It Is a Straight Line
// URL: https://leetcode.com/problems/check-if-it-is-a-straight-line/
//

var checkStraightLine = function (coordinates) {
    coordinates.sort((a, b) => a[0] - b[0]);
    let x1 = coordinates[0][0];
    let y1 = coordinates[0][1];
    
    slopeX = checkX(coordinates[1], coordinates[0]);
    slopeY = checkY(coordinates[1], coordinates[0])

    for (let i = 2; i < coordinates.length; i++) {
        if (slopeY * checkX(coordinates[i], coordinates[0]) !== slopeX * checkY(coordinates[i], coordinates[0])) {
            return false;
        }
    }
    return true;
}

var checkY = function (cordA, cordB) {
    return cordA[1] - cordB[1];
}

var checkX = function (cordA, cordB) {
    return cordA[0] - cordB[0];
}


// Test Cases
console.log(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6,7]])); // true
console.log(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]])); // false
console.log(checkStraightLine([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [7, 7]])); // true
console.log(checkStraightLine([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [7, 8]])); // false
console.log(checkStraightLine([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [8, 7]])); // false
console.log(checkStraightLine([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [-1, -1]])); // true
console.log(checkStraightLine([[0, 0], [1, 2], [3, 3], [4, 4], [5, 5], [-1, -2]])); // false

console.log(checkStraightLine([[0,0],[0,1],[0,-1]])); // true
console.log(checkStraightLine([[1,-8],[2,-3],[1,2]])); // false
console.log(checkStraightLine([[0,0],[0,5],[5,5],[5,0]])); // false
console.log(checkStraightLine([[2,4],[2,5],[2,8]])); // true

// Runtime: 70 ms, Memory Usage: 43.5 MB

