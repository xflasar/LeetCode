// Autor: Martin Flasar
// Date: 5/3/2023
//

var compose = function(functions) {
	return function(x) {
        functions.reverse();
        functions.forEach(func => {
            x = func(x);
        });
        return x;
    }
};


const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9

// Runtime: 77 ms, Memory Usage: 43.3 MB