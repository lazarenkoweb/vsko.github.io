function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function() {
    return (this.draft - this.crew * 1.5) > 20;
};

var emptyShip = new Ship(0,0);
console.log(emptyShip.isWorthIt()); // false

var titanic = new Ship(15, 0);
console.log(titanic.isWorthIt()); // false

var avrora = new Ship(50, 10);
console.log(avrora.isWorthIt()); // true
