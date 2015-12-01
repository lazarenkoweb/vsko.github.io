function Machine(power) {
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power, capacity) {
    Machine.apply(this, arguments);

    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    var running = false;
    var timerId;

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

    this.disable = function() {
        clearTimeout(timerId);
        this._enabled = false;
    };

    this.run = function() {
        if (this._enabled) {
            running = true;
            timerId = setTimeout(function () {
                onReady()
            }, getTimeToBoil());
        } else {
            throw new Error('ошибка, кофеварка выключена!');
        }
    };
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable();
