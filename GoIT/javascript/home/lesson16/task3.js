window.onload = function() {
    var listEl = document.getElementsByTagName('li');
    for (var i=0; i<listEl.length; i++) {
        var textData = listEl[i].firstChild.data.trim(),
            countEl = listEl[i].getElementsByTagName('li').length;
        alert(textData+ ': ' + countEl);
    }
};