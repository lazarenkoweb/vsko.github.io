function wordwrap(text, limit, spaces) {
    var checkText = text,
        limitText = limit || 20,
        spacesText = spaces || false;

    if (spacesText) {
        checkText = text.replace(/(\s+)/g, '');
    }

    if (checkText.length > limitText) {
        return text.substr(0, limitText) + '...';
    }

    return text;
}

console.log(wordwrap('Lorem ipsum'));
console.log(wordwrap('Lorem ipsum dolor sit amet, consectetur adipisicing elit'));
console.log(wordwrap('Lorem ipsum dolor sit amet, consectetur adipisicing elit', 200));
console.log(wordwrap('Lorem ipsum dolor sit amet, consectetur adipisicing elit', 20, true));
