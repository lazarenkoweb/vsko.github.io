function greet(name){
    if(name === "Johnny") {
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }
}

console.log(greet("Jim")); // 'Hello, Jim!'
console.log(greet("Johnny")); // 'Hello, my love!'
