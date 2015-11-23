function multiplyNumeric(obj) {
    for (num in obj) {
        if (obj[num] ^ 0) {
            obj[num] = obj[num]*2;
        }
    }
    return obj;
}

var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

console.log(multiplyNumeric(image));
