function CoffeMachine(power, capacity) {
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error('Значение должно быть положительным');
        }
        if (amount > capacity) {
            throw new Error('Нельзя залить воды больше чем ' + capacity);
        }
        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

    this.getPower = function() {
        return power;
    };
}

var coffeMachine = new CoffeMachine(1000, 1000);
console.log(coffeMachine.getPower());
