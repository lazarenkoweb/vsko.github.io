for (i=1; i<=100; i++) {
    if (i/3 % 1 == 0 && i/5 % 1 == 0) {
        console.log('FizzBuzz');
    }
    else if (i/3 % 1 == 0) {
        console.log('Fizz');
    } else if (i/5 % 1 == 0) {
        console.log('Buzz');
    }
}