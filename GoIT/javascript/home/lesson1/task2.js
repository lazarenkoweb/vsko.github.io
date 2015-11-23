var name, message;

do {
    name = prompt('Введите Ваше имя:', '');
}
while (name == '');

if (name == 'null') {
    name = 'гость';
}

//console.log(name);
//console.log(typeof name);

message = 'Добро пожаловать ' + name + '!';
document.write(message);
