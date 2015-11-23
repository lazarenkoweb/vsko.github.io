function getLongString(str) {
    var words = str.split(' '),
        count = 0,
        num = 0;

    for (var i=0; i<words.length; i++) {
        if (words[i].length > count) {
            num = words[i].length;
            num = i;
        }
    }

    return words[num];
}

console.log(getLongString("Web Development Tutorial"));
