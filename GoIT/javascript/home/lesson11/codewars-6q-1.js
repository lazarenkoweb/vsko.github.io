var typer = (function() {
    function getClass(obj) {
        return {}.toString.call(obj).slice(8, -1);
    }

    return {
        isNumber: function (d) { return getClass(d) === "Number" && !isNaN(d); },
        isString: function(d) { return getClass(d) === "String"; },
        isArray: function(d) { return getClass(d) === "Array"; },
        isFunction: function(d) { return getClass(d) === "Function"; },
        isDate: function(d) { return getClass(d) === "Date"; },
        isRegExp: function(d) { return getClass(d) === "RegExp"; },
        isBoolean: function(d) { return getClass(d) === "Boolean"; },
        isError: function(d) { return getClass(d) === "Error"; },
        isNull: function(d) { return d === null; },
        isUndefined: function(d) { return d === undefined; }
    };
}());

console.log(typer.isNumber(5));
console.log(typer.isString('that\'s a string'));
console.log(typer.isArray([4,6,8]));
console.log(typer.isFunction(function() { return false; }));
console.log(typer.isDate(new Date(1)));
console.log(typer.isRegExp(/\s+/));
console.log(typer.isBoolean(false));
console.log(typer.isError(new Error('error')));
console.log(typer.isNull(null));
console.log(typer.isUndefined(undefined));
