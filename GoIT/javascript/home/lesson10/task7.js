var shuffle = function(arr) {
    return arr.sort(function() {
        return 0.5 - Math.random();
    });
};

console.log(shuffle([5, 8, 9 ,2, 1, 4]));
