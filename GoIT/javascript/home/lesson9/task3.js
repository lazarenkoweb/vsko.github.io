function work(a, b) {
    alert( a + b );
}

function makeLogging(f, log) {
    function addLog() {
        log.push([].slice.call(arguments));
        return f.apply(this, arguments);
    }

    return addLog;
}

var log = [];
work = makeLogging(work, log);

console.log(log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i];
    alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}
