function fib(n) {
    var x = 0,
        y = 1,
        result = 1;

    for(var i=2; i<=n; i++) {
        result = x + y;
        x = y;
        y = result;
    }

    return result;
}

console.log(fib(77));
