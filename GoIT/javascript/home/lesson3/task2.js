function isSimpleNum(num)  {
    if(num == 1) return false;

    for(d=2; d*d<=num; d++) {
        if(num%d == 0) return false;
    }

    return true;
}

for (var i=2; i<=10; i++) {
    if (isSimpleNum(i)) {
        console.log(i);
    }
}

//console.log(isSimpleNum(4));