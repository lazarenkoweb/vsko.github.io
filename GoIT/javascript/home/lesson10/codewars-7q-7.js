function reverseIt(data) {
    if (typeof data === "number") {
        return +data.toString().split('').reverse().join('');
    } else if (typeof data === "string") {
        return data.toString().split('').reverse().join('');
    } else {
        return data;
    }
}

console.log(reverseIt('Hello')); // olleH
console.log(reverseIt(314159)); // 951413
console.log(reverseIt("314159")); // 951413
console.dir(reverseIt([])); // []
console.dir(reverseIt({})); // {}
console.dir(reverseIt(true)); // true
