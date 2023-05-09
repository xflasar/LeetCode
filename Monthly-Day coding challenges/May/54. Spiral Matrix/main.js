// Author: Martin Flasar
// Date: 5/9/2023
// LeetCode: 54. Spiral Matrix
// URL: https://leetcode.com/problems/spiral-matrix/
//

var spiralOrder = function(matrix) {
    let result = [];
    let topRow = 0, bottomRow = matrix.length - 1;
    let leftCol = 0, rightCol = matrix[0].length - 1;

    while (topRow <= bottomRow && leftCol <= rightCol) {
        for (let i = leftCol; i <= rightCol; i++) {
            result.push(matrix[topRow][i]);
        }
        topRow++;

        if (topRow > bottomRow) break;

        for (let i = topRow; i <= bottomRow; i++) {
            result.push(matrix[i][rightCol]);
        }
        rightCol--;

        if (leftCol > rightCol) break;

        for (let i = rightCol; i >= leftCol; i--) {
            result.push(matrix[bottomRow][i]);
        }
        bottomRow--;

        if (topRow > bottomRow) break;

        for (let i = bottomRow; i >= topRow; i--) {
            result.push(matrix[i][leftCol]);
        }
        leftCol++;
    }
    
    return result;
};

// Test Cases
console.log(spiralOrder([[1,2,3], [4,5,6], [7,8,9]])); // [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4], [5,6,7,8], [9,10,11,12]])); // [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]])); // [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

// Runtime: 56 ms, Memory Usage: 41.8 MB