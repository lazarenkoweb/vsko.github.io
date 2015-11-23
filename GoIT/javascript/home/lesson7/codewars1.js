function createFunctions(n) {
    var callbacks = [];

    for (var i=0; i<n; i++) {
        callbacks.push((function(a) {
            return function() {
                return a;
            }
        })(i));
    }

    return callbacks;
}

var callbacks = createFunctions(5);

console.log(callbacks[0]()); // 0
console.log(callbacks[3]()); // 3
