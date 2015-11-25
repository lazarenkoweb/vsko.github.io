var n = 1;

function printNumbersTimeout() {
    if (n <= 20) {
        console.log(n);
        setTimeout(printNumbersTimeout, 100);
    } else {
        clearTimeout(printNumbersTimeout);
    }
    n++;
}

printNumbersTimeout();
