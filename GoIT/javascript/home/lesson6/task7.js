function anClean(arr) {
    var result = [],
        obj = {};

    for(var i=0; i<arr.length; i++) {
        var name = arr[i].toLowerCase().split('').sort().join('');
        obj[name] = arr[i];
    }

    for (var k in obj) {
        result.push(obj[k]);
    }

    return result;
}

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log(anClean(arr)); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
