var num;

do {
    num = prompt('Введите число: ', '');
    console.log(num);
}
while(+num <= 100 && num !== null);

document.write(num);