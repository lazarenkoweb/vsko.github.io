function always (n) {
    return function() {
        return n;
    }
}

console.log(always(true)()); // true
