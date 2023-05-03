// Autor: Martin Flasar
// Date: 5/3/2023
//

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let t = Date.now();
sleep(1000).then(() => console.log(Date.now() - t));

// Runtime: 54 ms, Memory Usage: 41.4 MB