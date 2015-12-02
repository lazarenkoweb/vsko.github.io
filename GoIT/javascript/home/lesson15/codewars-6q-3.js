function Greeting(name) {
    this.name = name;
}

Greeting.prototype.sayHello = function() {
    return "Hello " + this.name;
};


Greeting.prototype.sayBye = function() {
    return "Bye " + this.name;
};

function construct(Class) {
    return new (Class.bind.apply(Class, arguments));
}

//var greeting = new Greeting('John');
var greeting = construct(Greeting, 'John');
console.log(greeting);
