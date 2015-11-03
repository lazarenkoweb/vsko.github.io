/* Не готово */

function Calculator() {
    var methods = [];

    this.calculate = function(str) {
        var part = str.split(' '),
            n1 = +part[0], n2 = +part[2],
            op = part[1], result = null;

        switch (op) {
            case '+': result = n1 + n2; break;
            case '-': result = n1 - n2; break;
            default: result = NaN;
        }

        return result;
    };

    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}

var calc = new Calculator;
//console.log(calc.calculate('5 - 2')); // 3

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
