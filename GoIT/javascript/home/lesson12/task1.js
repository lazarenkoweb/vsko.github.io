var n = 1;

function printNumbersInterval() {
    if (n <= 20) {
        console.log(n);
        n++;
    }
    else {
        clearInterval(printNumbersInterval);
    }
}

setInterval(printNumbersInterval, 100);
