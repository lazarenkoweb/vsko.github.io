function checkSpam(text) {
    var words = ['spam', 'sex'];

    for (var i=0; i<words.length; i++) {
        if ((text.toLowerCase().indexOf(words[i].toLowerCase())) > -1) {
            return true;
        }
    }

    return false;
}

console.log(checkSpam('get new Sex videos'));
console.log(checkSpam('[SPAM] How to earn fast money?'));
console.log(checkSpam('New PSD template'));