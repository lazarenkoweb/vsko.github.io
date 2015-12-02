var MyNamespace = MyNamespace || {};
MyNamespace.MyClass = function(string){
    this.sayHello = function(){
        return string;
    };
};

var myObject = new MyNamespace.MyClass('Hello!');
var phrase = myObject.sayHello();
console.log(phrase); // Hello!
