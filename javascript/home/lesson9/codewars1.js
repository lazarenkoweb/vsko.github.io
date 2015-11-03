function spread(func, args) {
    return func.apply(func, args);
}

console.log(spread(function(x,y){return x+y}, [1,2])); // 3
