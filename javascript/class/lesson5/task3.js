// Task 3.1
function lastIndex(arr) {
    return arr[arr.length-1];
}

arr = [4, 6, 0, 1, 4, 5, 2, 3];

console.log(lastIndex(arr));

// Task 3.2
function addLastIndex(arr, value) {
    var result = [];

    for (var k in arr) {
        result[k] = arr[k];
    }

    result[result.length] = value;
    return result;
}

console.log(addLastIndex(arr, 8));
console.log(arr);

// Task 3.3
var fruits = ['apple', 'orange'];
fruits.push('kiwi');
fruits[fruits.length-2] = 'pear';
fruits.shift();
fruits.unshift('apricot', 'peach');
console.log(fruits);

// Task 3.4
function randArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(randArray(arr));

// Task 3.5
function find(arr, value) {
    var found = -1;
    for (var i=0; i<arr.length; i++) {
        if (arr[i] === value) {
            found = i;
        }
    }

    return found;
}

console.log('---');
console.log(find(arr, 4));

// Task 3.6
function filterRange(arr, a, b) {
    var result = [];

    for (var i=0; i<arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log('---');
console.log(filterRange(arr, 5, 7));
