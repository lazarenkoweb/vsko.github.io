$(function() {
    var ToDo = function() {
        this.ls = localStorage;
        this.model = [];

        this.inputField = $('.task-form__text');
        this.form = $('.task-form');
        this.todoList = $('.table__body');

        this.init();
    };

    // Получить локальные данные
    ToDo.prototype.getLocalData = function(id) {
        if (this.ls[id]) {
            return JSON.parse(this.ls[id]);
        } else {
            return [];
        }
    };

    // Записать локальные данные
    ToDo.prototype.setLocalData = function(id, data) {
        this.ls[id] = JSON.stringify(data);
    };

    // Получить размер нашей модели - колличество элементов на текущий момент
    ToDo.prototype.getLength = function() {
        return this.getLocalData('todo').length;
    };

    // Сгененрировать html для новой строки с элементом
    ToDo.prototype.getItemHtml = function (position, item) {
        var tmpl = '<tr><th>:position</th><td>:text</td><td><button type="button" data-index=":index" class="sort-up btn btn-info">&#8593;</button></td><td><button type="button" data-index=":index" class="sort-down btn btn-info">&#8595;</button></td><td><button type="button" data-index=":index" class="btn btn-danger">☓</button></td></tr>';

        return tmpl.replace(/:position/gi, position).replace(/:text/gi, item).replace(/:index/gi, position - 1);
    };

    // Добавить новый элемент в список
    ToDo.prototype.addItem = function (todoText) {
        var newTodo = { text: todoText };
        this.model.push(newTodo);

        this.setLocalData('todo', this.model);

        this.appendRenderItem(this.getLength(), newTodo);
    };

    // Добавить в DOM новый элемент в низ списка
    ToDo.prototype.appendRenderItem = function (index, item) {
        this.todoList.append(this.getItemHtml(index, item.text));
    };

    // Отрендерить весь список полностью
    ToDo.prototype.renderList = function () {
        var list = '',
            __self = this;

        this.model = this.getLocalData('todo');

        $.each(this.model, function(index, item) {
            list += __self.getItemHtml(index + 1, item.text);
        });

        this.todoList.html(list);
    };

    // на Сабмит формы
    ToDo.prototype.onFormSubmit = function (e) {
        e.preventDefault();

        this.addItem(this.inputField.val());

        this.form.trigger('reset');
    };

    // Удаление элемента
    ToDo.prototype.removeItem = function (index) {
        this.model.splice(index, 1);
        this.setLocalData('todo', this.model);

        this.renderList();
    };

    // Переместить элемент вверх
    ToDo.prototype.upItem = function (index) {
        var newData = $.merge([], this.model);

        if (newData[index-1]) {
            var first = newData[index-1];
            var second = newData[index];
            newData[index] = first;
            newData[index-1] = second;

            this.setLocalData('todo', newData);
        }

        this.renderList();
    };

    // Переместить элемент вниз
    ToDo.prototype.downItem = function (index) {
        var newData = $.merge([], this.model);

        if (newData[index+1]) {
            var first = newData[index+1];
            var second = newData[index];
            newData[index] = first;
            newData[index+1] = second;
        }

        this.setLocalData('todo', newData);

        this.renderList();
    };

    // Инициализация
    ToDo.prototype.init = function () {
        var __self = this;

        if (!this.getLength()) {
            this.model = [
                { text: 'Купить молоко' },
                { text: 'Одеть трусы' },
                { text: 'Сходить на работу' }
            ];

            this.setLocalData('todo', this.model);
        } else {
            this.model = this.getLocalData('todo');
        }

        this.renderList();

        this.todoList.on('click','.btn-danger', function (e) {
            var index = $(e.target).data('index');

            __self.removeItem(index);
        });

        // Событие сортировки вверх
        this.todoList.on('click','.sort-up', function(e) {
            var index = $(e.target).data('index');

            __self.upItem(index);
        });

        // Событие сортировки вниз
        this.todoList.on('click','.sort-down', function(e) {
            var index = $(e.target).data('index');

            __self.downItem(index);
        });

        // Активация кнопки при вводе текста
        this.form.on('keyup','.task-form__text', function() {
            var buttonSubmit = $('input[type="submit"]');
            if ($(this).val().length > 0) {
                buttonSubmit.removeAttr('disabled');
            } else {
                buttonSubmit.attr('disabled', 'disabled');
            }
        });

        this.form.submit(function (e) {
            __self.onFormSubmit(e);
        });
    };

    window.todo = new ToDo();
});
