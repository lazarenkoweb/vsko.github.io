var Ghost = function() {
    this.color = (function() {
        var colors = ['white', 'yellow', 'purple', 'red'];
        return colors[Math.floor(Math.random() * colors.length)];
    })();
};

var ghost = new Ghost();
console.log(ghost.color); // white or yellow or purple or red
