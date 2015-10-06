var login, password, message;

function getPrompt(title) {
    var data;

    do {
        data = prompt(title, '');
    }
    while (data == '');

    return data;
}

login = getPrompt('Введите логин:');

if (login === null) {
    message = 'Canceled';
} else if (login == 'admin') {
    password = getPrompt('Введите пароль:');

    if (password === null) {
        message = 'Canceled';
    } else if (password == 'passw0rd') {
        message = 'Welcome home!';
    } else {
        message = 'Wrong password';
    }
} else {
    message = 'Access denied';
}

document.write(message);

