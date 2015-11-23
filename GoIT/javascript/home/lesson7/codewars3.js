var make_lazy = function (func) {
    return func.bind.apply(func, arguments);
};

var add = function (a, b) {
    return a + b;
};

var lazy_sum = make_lazy(add, 2, 3);

console.log(lazy_sum() === 5);
