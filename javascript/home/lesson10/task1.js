var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

function extractNumber(obj) {
    arr = [];
    for (k in obj) {
        if (typeof obj[k] == "number") {
            arr.push(obj[k]);
        }
    }

    return arr;
}

function extractString(obj) {
    arr = [];
    for (k in obj) {
        if (typeof obj[k] == "string") {
            arr.push(obj[k]);
        }
    }

    return arr;
}

var ages = extractNumber(obj);
var names = extractString(obj);

console.log(ages);
console.log(names);
