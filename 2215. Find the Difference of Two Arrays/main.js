// Autor: Martin Flasar
// Date: 5/3/2023
//

const nums1 = [-57,6,-88,-62];
const nums2 = [-19,70,-88,2,-2,-5,3];

var findDifference = function (nums1, nums2) {
    let tempNums1 = [];
    let tempNums2 = [];
    let answer = [];

    for (let i = 0; i < nums1.length; i++) {
        let found = false;
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                found = true;
                break;
            }
        }
        if (!found && !tempNums1.includes(nums1[i])) {
            tempNums1.push(nums1[i]);
        }
    }

    answer.push(tempNums1);

    for (let i = 0; i < nums2.length; i++) {
        let found = false;
        for (let j = 0; j < nums1.length; j++) {
            if (nums2[i] === nums1[j]) {
                found = true;
                break;
            }
        }
        if (!found && !tempNums2.includes(nums2[i])) {
            tempNums2.push(nums2[i]);
        }
    }
    answer.push(tempNums2);
    return answer;
};

console.log(findDifference(nums1, nums2));

// Runtime: 150 ms, Memory Usage: 47.4 MB