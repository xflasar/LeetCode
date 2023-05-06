// Author: Martin Flasar
// Date: 5/6/2023
// LeetCode: 13. Roman to Integer
// URL: https://leetcode.com/problems/roman-to-integer/
//

var romanToInt = function(s) {
    let result = 0
    for(let i = 0; i < s.length; i++) {
        let current = s[i];
        let next = s[i+1];
        if(checkForSubtraction(current + next)) {
            result += convert(current + next);
            i++;
        } else {
            result += convert(current);
        }
    }
    return result;
}

var convert = function(s) {
    switch(s) {
        case 'I':
            return 1;
        case 'IV':
            return 4;
        case 'IX':
            return 9;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'XL':
            return 40;
        case 'XC':
            return 90;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'CD':
            return 400;
        case 'CM':
            return 900;
        case 'D':
            return 500;
        case 'M':
            return 1000;
    }
}

var checkForSubtraction = function(s) {
    if(s.length < 2) return false;
    let first = s[0];
    let second = s[1];
    if(first === 'I' && second === 'V') return true;
    if(first === 'I' && second === 'X') return true;
    if(first === 'X' && second === 'L') return true;
    if(first === 'X' && second === 'C') return true;
    if(first === 'C' && second === 'D') return true;
    if(first === 'C' && second === 'M') return true;
    return false;
}

// Test Cases
console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994

// Runtime: 106 ms, Memory Usage: 47.4 MB