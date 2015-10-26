var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya, masha, vovochka ];

people.sort(function(o1, o2) {
    return o1.age - o2.age;
});

console.log(people[0].age); // 6

for (var i=0; i<people.length; i++) {
    document.write(people[i].name + ': ' + people[i].age + '<br />');
}
