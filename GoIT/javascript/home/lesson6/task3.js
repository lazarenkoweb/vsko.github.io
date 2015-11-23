var arr = [1, 2, 3, 4, 5];


arr.sort(function sortRand() {
    return (Math.random() - .5);
});

console.log(arr);
