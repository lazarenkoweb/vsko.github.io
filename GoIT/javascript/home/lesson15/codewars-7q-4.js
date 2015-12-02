Array.prototype.reverse = function() {
    for (var i=0; i<this.length/2; i++) {
        var temp = this[i];
        this[i] = this[this.length-1-i];
        this[this.length-1-i] = temp;
    }
    return this;
};

console.log([1,2,3,4].reverse());
