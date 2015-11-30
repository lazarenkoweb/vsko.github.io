function printNumbersInterval() {
    var n = 1;
    var timerId = setInterval(function() {
        if (n <= 20) {
            console.log(n);
            n++;
        }
        else {
            clearInterval(timerId);
        }
    }, 100);
}

printNumbersInterval();
