window.onload = function() {

    // 1 - Все элементы label внутри таблицы
    var tableId = document.getElementById('age-list'),
        labelEl = tableId.getElementsByTagName('label');
    console.log(labelEl.length);

    // 2 - Первую ячейку таблицы (со словом "Возраст")
    var tableEl = document.getElementsByTagName('table')[0];
    for (var i=0; i<tableEl.rows.length; i++) {
        var td = tableEl.rows[i].cells;
        for (var j=0; j<td.length; j++) {
            if (td[j].innerText == 'Возраст:') {
                console.log(td[j].innerText);
            }
        }
    }

    // 3 - Вторую форму в документе
    var formEl = document.getElementsByTagName('form');
    console.log(formEl[1]);

    // 4 - Форму с именем search, без использования её позиции в документе
    var formNamedEl = document.getElementsByName('search');
    for (var i=0; i<formNamedEl.length; i++) {
        if (formNamedEl[i].tagName == 'FORM') {
            console.log(formNamedEl[i]);
        }
    }

    // 5 - Элемент input в форме с именем search. Если их несколько, то нужен первый
    var formNamedEl = document.getElementsByName('search');
    for (var i=0; i<formNamedEl.length; i++) {
        if (formNamedEl[i].tagName == 'FORM') {
            var input = formNamedEl[i].getElementsByTagName('input');
            console.log(input[0]);
        }
    }

    // 6 - Элемент с именем info[0], без точного знания его позиции в документе
    var info0 = document.getElementsByName('info[0]');
    console.log(info0[0]);

    // 7 - Элемент с именем info[0], внутри формы с именем search-person
    var formEl = document.getElementsByTagName('form');
    for (var i=0; i<formEl.length; i++) {
        if (formEl[i].name == "search-person") {
            var inputEl = formEl[i].getElementsByTagName('input');
            for (var j=0; j<inputEl.length; j++) {
                if (inputEl[j].name == "info[0]") {
                    console.log(inputEl[j]);
                }
            }
        }
    }

};