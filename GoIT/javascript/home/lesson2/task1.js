var year, message;

do {
    year = prompt('Какой сейчас год?', '');
}
while (year == '');

if (year == '2015') {
    message = 'Вы правы!';
} else {
    message = 'С луны свалися? 2015!';
}

document.write(message);
