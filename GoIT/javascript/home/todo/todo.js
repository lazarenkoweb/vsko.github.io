(function() {
    var ToDo = function() {
        this.model = [
            {text: "Купить молока"},
            {text: "Одеть трусы"},
            {text: "Съездить на роботу"}
        ];

        this.addItem = function(todotext) {
            var newTodo = {text: todotext};
            this.model.push(newTodo);
        };
    };

    window.todo = new ToDo();
})();