function duplicates(arr) {
    var result = [],
        temp = arr.slice();
    for (var i=0; i<arr.length; i++) {
        var c = 0;
        for (var j=0; j<temp.length; j++) {
            if (arr[i] === temp[j]) {
                c++;
            }
        }
        if (c > 1 && result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']).length === 3); // true
console.log(duplicates([0, 1, 2, 3, 4, 5]).length === 0); // true
