function isEmpty(obj) {
    for (var k in obj) {
        return false;
    }
    return true;
}

var todoList = {};

console.log(isEmpty(todoList));

todoList['homework'] = 'lesson5';

console.log(isEmpty(todoList));
