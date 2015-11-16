function getType(data) {
    return typeof data;
}

console.log(getType(new Object())); // object
console.log(getType(true || false)); // boolean
console.log(getType(new Function())); // function
console.log(getType(10)); // number
console.log(getType("hello")); // string
console.log(getType(undefined)); // undefined
