function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];

    this.addFood = function(item) {
        if (!this._enabled) {
            throw new Error('Холодильник выключен');
        }

        if (arguments.length == 1) {
            if (this.countFood() >= (power/100)) {
                throw new Error('Слишком много еды');
            }
            food.push(item);
        } else {
            for (var i=0; i<arguments.length; i++) {
                this.addFood(arguments[i]);
            }
        }
    };

    this.getFood = function() {
        return food.slice();
    };

    this.countFood = function() {
        return food.length;
    };

    this.filterFood = function(func) {
        return food.filter(func);
    };

    this.removeFood = function(item) {
        var i = food.indexOf(item);
        if (i != -1) food.splice(i, 1);
    };

    var parentDisable = this.disable;
    this.disable = function() {
        if (food.length) {
            throw new Error('В холодильнике есть еда');
        }
        parentDisable.call(this);
    }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда
