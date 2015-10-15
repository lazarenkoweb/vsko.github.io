function pow(x, n) {
    var result = x;
    while (--n) {
        result *= x;
    }
    return result;
}

console.log(pow(3, 2));