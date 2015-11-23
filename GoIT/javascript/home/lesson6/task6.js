function unique(arr) {
    var result = [],
        found = false;

    for (var i=0; i<arr.length; i++) {
        for (var j=0; j<=result.length; j++) {
            if (arr[i] == result[j]) {
                found = true;
            }
        }

        if (!found) {
            result.push(arr[i]);
        }

        found = false;
    }

    return result;
}

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

console.log(unique(strings)); // кришна, харе, 8-()
