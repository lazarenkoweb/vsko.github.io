function sum(a, b) {
    if (b === undefined) {
        return function(b) {
            return a+b;
        }
    } else {
        return a+b;
    }
}

console.log(sum(2,3)); // 5
console.log(sum(5)(2)); // 7
