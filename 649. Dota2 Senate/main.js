// Author: Martin Flasar
// Date: 5/4/2023
// LeetCode: 649. Dota2 Senate
// URL: https://leetcode.com/problems/dota2-senate/
//

var predictPartyVictory = function (senate) {
    let hasD = senate.includes('D');
    let hasR = senate.includes('R');
    
    while(hasD && hasR) {
      let firstChar = senate[0];
      senate = senate.substring(1) + firstChar;
      if(firstChar === 'D') {
        senate = senate.replace('R', '');
        hasR = senate.includes('R');
      } else if (firstChar === 'R') {
        senate = senate.replace('D', '');
        hasD = senate.includes('D');
      }
    }

    if(senate[0] === 'R') {
        return "Radiant"; 
    }
    else
    {
        return "Dire";
    }
}

predictPartyVictory("RDD");

// Runtime: 115 ms, Memory Usage: 48.1 MB