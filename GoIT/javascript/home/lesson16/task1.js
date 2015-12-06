window.onload = function() {
    var table = document.getElementsByTagName('table');
        tr = table[0].getElementsByTagName('tr');

    for (var i=0; i<tr.length; i++) {
        for (var j=0; j<tr[i].children.length; j++) {
            var td = tr[i].children[j];
            if (i == j) {
                td.style.backgroundColor = 'red';
            }
        }
    }
};