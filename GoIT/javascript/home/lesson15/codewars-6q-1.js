function NamedOne(first, last) {
    this.firstName = first,
    this.lastName = last;

    Object.defineProperty(this,
        'fullName', {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            set: function(newFull) {
                var name = newFull.split(' ');
                if (name.length === 2) {
                    this.firstName = name[0];
                    this.lastName = name[1];
                }
            }
        }
    );
}

var namedOne = new NamedOne("Naomi", "Wang");

namedOne.firstName = "John";
namedOne.lastName = "Doe";
console.log(namedOne.fullName); // John Doe

namedOne.fullName = "Bill Smith";
console.log(namedOne.firstName); // Bill
console.log(namedOne.lastName); // Smith
console.log(namedOne.fullName); // Bill Smith
