function check(val) {
    return isInt(val) || val === null || val === '';
}

function isInt(n) {
    return isNaN(parseInt(n));
}

var num,
    sum = 0;
    digs = [];

do {
    num = prompt('Введите число:', '');

    if (!isInt(num)) {
        digs.push(+num);
    }

} while (!check(num));

for (var i=0; i<digs.length; i++) {
    sum += digs[i];
}

console.log(sum);