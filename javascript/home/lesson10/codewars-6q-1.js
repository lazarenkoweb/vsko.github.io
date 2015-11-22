function fibonacci(n) {
    var result = [];

    if (n > 0) {
        result[0] = 0;
        result[1] = 1;

        for (var i = 2; i<n; i++) {
            result.push(result[i-1] + result[i-2]);
        }
    }

    return result;
}

console.log(fibonacci(15)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377 ]
console.log(fibonacci(4)); // [ 0, 1, 1, 2 ]
console.log(fibonacci(2)); // [ 0, 1 ]
console.log(fibonacci(-1)); // []
