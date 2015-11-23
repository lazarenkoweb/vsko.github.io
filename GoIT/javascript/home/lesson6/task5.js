function isPal(string) {
    var w1, w2;

    w1 = string.replace(/\s/g, '').toLowerCase();
    w2 = w1.split('').reverse().join('');

    if (w1 === w2) {
        return true;
    }

    return false;
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
