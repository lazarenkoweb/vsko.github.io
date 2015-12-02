var Singleton = function() {
    return Singleton._instance || (Singleton._instance = this);
};

var obj1 = new Singleton();
var obj2 = new Singleton();
console.log(obj1 === obj2); // true
obj1.test = 1;
console.log(obj2.test); // 1
