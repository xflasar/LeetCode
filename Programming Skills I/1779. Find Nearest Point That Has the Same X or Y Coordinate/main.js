// Author: Martin Flasar
// Date: 5/8/2023
// LeetCode: 1779. Find Nearest Point That Has the Same X or Y Coordinate
// URL: https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
//

var nearestValidPoint = function (x, y, points) {
    let min = Infinity;
    let minIndex = -1;

    for (let i = 0; i < points.length; i++) {
        let point = points[i];
        let x1 = point[0];
        let y1 = point[1];

        if (x1 === x || y1 === y) {
            let distance = Math.abs(x1 - x) + Math.abs(y1 - y);
            if (distance < min) {
                min = distance;
                minIndex = i;
            }
        }
    }
    return minIndex;
}

// Test Cases
console.log(nearestValidPoint(3, 4, [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]])); // 2

// Runtime: 86 ms, Memory Usage: 50.1 MB