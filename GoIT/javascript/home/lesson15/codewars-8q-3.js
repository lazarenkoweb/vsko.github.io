function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

var n = new NameMe('John', 'Doe');
console.log(n.firstName); // John
console.log(n.lastName); // Doe
console.log(n.name); // John Doe
