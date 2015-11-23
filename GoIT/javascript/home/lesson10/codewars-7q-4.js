function pattern(n) {
    var output="",
        num = '',
        result = [];

    for (var i=1; i<=n; i++) {
        num += i%10;
    }

    for (var j=0; j<n; j++) {
        result.push(Array(n-j).join(' ') + num + Array(j+1).join(' '));
    }

    return result.join("\n");
}


//..123
//.123.
//123..

//'..123\n.123.\n123..'
//"..123\n.123.\n123..\n"

console.dir(pattern(3));
console.log(pattern(5));
console.log(pattern(8));
