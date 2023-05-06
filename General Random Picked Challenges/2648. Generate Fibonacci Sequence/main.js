// Author: Martin Flasar
// Date: 5/4/2023
// Leetcode: 2648. Generate Fibonacci Sequence
// URL: https://leetcode.com/problems/generate-fibonacci-sequence/
//

var fibGenerator = function*() {
    let x = 0;
    let y = 1;
    yield x;
    while (true) {
        let temp = x;
        x = y;
        y = temp + y;
        yield x;
    }
};

const gen = fibGenerator();
for (let i = 0; i < 50; i++) {
    console.log(gen.next().value);
}

// Runtime: 57 ms, Memory Usage: 41.7 MB