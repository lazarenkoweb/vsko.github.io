function add() {
    var sum = 0;

    for (var i=0; i<arguments.length; i++) {
        sum += (+arguments[i] * (i+1));
    }

    return sum;
}

console.log(add(100,200,300)); // 1400
