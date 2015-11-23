function toUpperCaseWord(str) {
    return str.split(' ').map(function(s) {
        return s[0].toUpperCase() + s.slice(1);
    });
}

console.log(toUpperCaseWord("the quick brown fox"));
