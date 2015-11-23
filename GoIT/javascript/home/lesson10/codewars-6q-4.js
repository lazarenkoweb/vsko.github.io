function count(string) {
    var result = {},
        arr = string.split('');

    for (var i=0; i<arr.length; i++) {
        if (result[arr[i]]) {
            result[arr[i]] += 1;
        } else {
            result[arr[i]] = 1;
        }
    }

    return result;
}

console.log(count('aba')); // { a: 2, b: 1 }
console.log(count('')); // {}
