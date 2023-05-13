// Author: Martin Flasar
// Date: 5/13/2023
// LeetCode: 566. Reshape the Matrix
// URL: https://leetcode.com/problems/reshape-the-matrix/
//

var matrixReshape = function(mat, r, c) {
    let m = [[]];
    let temp = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            temp.push(mat[i][j]);
        }
    }
    if (temp.length !== r * c) {
        return mat;
    }
    let count = 0;
    for (let i = 0; i < r; i++) {
        m[i] = [];
        for (let j = 0; j < c; j++) {
            m[i][j] = temp[count];
            count++;
        }
    }
    return m;
}

console.log(matrixReshape([[1,2],[3,4]], 1, 4));
console.log(matrixReshape([[1,2],[3,4]], 2, 4));

// Runtime: 87 ms, Memory Usage: 46 MB