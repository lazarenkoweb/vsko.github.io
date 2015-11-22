function swap(str) {
    return str.split('').map(function(s) {
        return (s === s.toUpperCase()) ? s.toLowerCase() : s.toUpperCase();
    }).join('');
}

console.log(swap('HelloWorld')); // hELLOwORLD
console.log(swap('CodeWars')); // cODEwARS
