function printNumbersTimeout() {
    var n = 1;
    var timerId = setTimeout(function go() {
        console.log(n);
        if (n < 20) {
            setTimeout(go, 100);
            n++;
        }
    }, 100);
}

printNumbersTimeout();
