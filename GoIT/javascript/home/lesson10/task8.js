function uniqueSortArray(arr) {
    var obj = {},
        result = [];

    for (var i=0; i<arr.length; i++) {
        if (arr[i] in obj) {
            obj[arr[i]] = ++obj[arr[i]];
        } else {
            obj[arr[i]] = 1;
        }
    }

    for (var k in obj) {
        result.push([k, obj[k]]);
    }

    var sorted = result.sort(function(a, b) {
        if (b[1] > 1) {
            return a[1] - b[1];
        } else {
            return b[1];
        }
    }).reverse();

    return sorted.map(function(arr) {
        return arr[0];
    });
}

var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];

console.log(uniqueSortArray(arr));
