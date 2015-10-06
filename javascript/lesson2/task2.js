var num;

do {
    num = prompt('Введите любое целое число?', '');
}
while (num == '');

num = +num;

console.log(typeof num);

if (num > 0) {
    alert(1);
} else if (num < 0) {
    alert(-1);
} else {
    alert(0);
}
