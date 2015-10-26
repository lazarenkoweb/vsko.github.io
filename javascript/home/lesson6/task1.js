var obj = {
    className: 'open menu open open menu menu open'
};

function removeClass(obj, cls) {
    var result = parts = '';

    if (obj.className) {
        parts = obj.className.split(' ');

        for (var i=0; i<parts.length; i++) {
            if (parts[i] == 'open') { continue; }
            else {
                result += parts[i] + ' ';
            }
        }

        obj.className = result.trim();
    }
}

removeClass(obj, 'open');
console.log(obj.className);
