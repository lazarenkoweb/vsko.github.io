var Calculator = {
    average: function() {
        if (arguments.length > 0) {
            for (var i = 0, sum = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
            return sum / arguments.length;
        } else {
            return 0;
        }
    }
};

console.log(Calculator.average(3,4,5)); // 4
console.log(Calculator.average(8,6,12)); // 8.666666666666666
console.log(Calculator.average(5,2,8)); // 5
