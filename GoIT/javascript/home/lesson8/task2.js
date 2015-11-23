function Calculator() {
    var methods = [];

    this.calculate = function(str) {
        var exp = str.split(' '),
            a = +exp[0], b = +exp[2],
            op = exp[1];

        this.addMethod('+', function(a, b) {
            return a + b;
        });

        this.addMethod('-', function(a, b) {
            return a - b;
        });

        if (methods[op]) {
            return methods[op](a, b);
        } else {
            return NaN;
        }
    };

    this.addMethod = function(op, func) {
        methods[op] = func;
    };
}

var calc = new Calculator;
console.log(calc.calculate('5 - 2')); // 3

var powerCalc = new Calculator;

powerCalc.addMethod('*', function(a, b) {
    return a * b;
});

powerCalc.addMethod('/', function(a, b) {
    return a / b;
});

powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log( result ); // 8
