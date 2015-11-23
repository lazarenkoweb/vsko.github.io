function solution(number){
    var s = 0, n = 1;
    while (number>n) {
        s += (n % 3 == 0 || n % 5 == 0) ? n : 0;
        n++;
    }
    return s;
}

console.log(solution(10)); // 23
