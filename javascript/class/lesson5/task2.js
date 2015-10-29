function totalSalaries(obj) {
    var t = 0;
    for (var k in obj) {
        t += obj[k];
    }
    return t;
}

var salaries = {
    junior: 1000,
    middle: 2500,
    senior: 3500,
    lead: 5000
};

console.log(totalSalaries(salaries));
