function isPangram(string){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz',
        stringDetect = string.toLowerCase();

    for (var i=0; i<alphabet.length; i++) {
        if (stringDetect.indexOf(alphabet[i]) === -1) {
            return false;
        }
    }

    return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy.'));
