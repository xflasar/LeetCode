// Author: Martin Flasar
// Date: 5/9/2023
// LeetCode: 59. Spiral Matrix II
// URL: https://leetcode.com/problems/spiral-matrix-ii/
//

var generateMatrix = function(n) {
    let result = []
    for (let i = 0; i < n; i++) {
        result.push([])
    }
    let topRow = 0, bottomRow = n - 1
    let leftCol = 0, rightCol = n - 1
    let counter = 1

    while (topRow <= bottomRow && leftCol <= rightCol) {
        for (let i = leftCol; i <= rightCol; i++) {
            result[topRow][i] = counter++
        }
        topRow++

        if (topRow > bottomRow) break

        for (let i = topRow; i <= bottomRow; i++) {
            result[i][rightCol] = counter++
        }
        rightCol--

        if (leftCol > rightCol) break

        for (let i = rightCol; i >= leftCol; i--) {
            result[bottomRow][i] = counter++
        }
        bottomRow--

        if (topRow > bottomRow) break

        for (let i = bottomRow; i >= topRow; i--) {
            result[i][leftCol] = counter++
        }
        leftCol++
    }
    
    return result
}

// Test Cases
console.log(generateMatrix(3)) // [[1,2,3], [8,9,4], [7,6,5]]
console.log(generateMatrix(1)) // [[1]]
console.log(generateMatrix(4)) // [[1,2,3,4], [12,13,14,5], [11,16,15,6], [10,9,8,7]]

// Runtime: 68 ms, Memory Usage: 41.4 MB (Beats 94.81%)