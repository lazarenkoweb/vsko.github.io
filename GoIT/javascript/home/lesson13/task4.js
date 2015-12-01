function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    var running = false;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getTimeToBoil = function() {
        return getTimeToBoil();
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

    this.addWater = function(amount) {
        var water = this.getWaterAmount();

        water += amount;

        this.setWaterAmount(water);
    };

    this.setOnReady = function(func) {
        onReady = func;
    };

    var onReady = function() {
        alert( 'Кофе готов!' );
    };

    this.isRunning = function() {
        return running;
    };

    this.run = function() {
        running = true;
        setTimeout(function() { onReady() }, getTimeToBoil());
    };
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
    alert( "После: " + coffeeMachine.isRunning() ); // После: false
});
